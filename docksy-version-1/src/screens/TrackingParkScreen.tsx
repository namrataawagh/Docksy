import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Stepper } from '../components/Stepper';
import { RobotIcon, MapPinIcon, ClockIcon } from '../components/icons';
import { HARDCODED_DATA } from '../types';

interface TrackingParkScreenProps {
  onComplete: () => void;
}

const steps = [
  { id: '1', label: 'Robot Assigned', status: 'pending' as const },
  { id: '2', label: 'Dispatched', status: 'pending' as const },
  { id: '3', label: 'Vehicle Secured', status: 'pending' as const },
  { id: '4', label: 'Parking in Progress', status: 'pending' as const },
  { id: '5', label: 'Completed', status: 'pending' as const },
];

export const TrackingParkScreen: React.FC<TrackingParkScreenProps> = ({ onComplete }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [robotOffset, setRobotOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(current => {
        if (current >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return current;
        }
        return current + 1;
      });

      // Subtle robot movement
      setRobotOffset(Math.random() * 4 - 2);
    }, 1500);

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentSteps = steps.map((step, index) => ({
    ...step,
    status: (index < activeStep ? 'completed' : index === activeStep ? 'active' : 'pending') as 'completed' | 'active' | 'pending'
  }));

  return (
    <div className="space-y-4 animate-fade-in">
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl -mr-16 -mt-16" />

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Parking in Progress</h3>
              <p className="text-sm text-gray-500">Robot is handling your vehicle</p>
            </div>
            <div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white shadow-glow transition-transform duration-300"
              style={{ transform: `translateY(${robotOffset}px)` }}
            >
              <RobotIcon size={28} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="glass-card-sm p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Robot</p>
              <p className="text-sm font-bold text-gray-800">{HARDCODED_DATA.robot}</p>
            </div>
            <div className="glass-card-sm p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Slot</p>
              <p className="text-sm font-bold text-gray-800">{HARDCODED_DATA.slot}</p>
            </div>
            <div className="glass-card-sm p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">ETA</p>
              <div className="flex items-center justify-center gap-1 text-sm font-bold text-teal-600">
                <ClockIcon size={12} />
                <span>{HARDCODED_DATA.eta}</span>
              </div>
            </div>
          </div>

          <Stepper steps={currentSteps} activeStep={activeStep} />
        </div>
      </Card>

      {/* Progress visualization */}
      <div className="glass-card p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
            <MapPinIcon className="text-teal-600" size={24} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">
              {activeStep === 0 && 'Assigning nearest robot...'}
              {activeStep === 1 && 'Robot dispatched to your location'}
              {activeStep === 2 && 'Securing vehicle with care'}
              {activeStep === 3 && 'Transporting to parking slot'}
              {activeStep === 4 && 'Parking completed successfully!'}
            </p>
            <div className="mt-2 h-1.5 bg-gray-200/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};