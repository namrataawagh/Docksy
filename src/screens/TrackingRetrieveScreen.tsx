import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';

interface TrackingRetrieveScreenProps {
  onComplete: () => void;
}

const DATA = {
  robot: 'RB-07',
  slot: 'B2-14',
  eta: '2m 30s',
};

const steps = ['Robot Assigned', 'Navigating to Slot', 'Vehicle Picked', 'Delivering to Bay', 'Ready for Pickup'];

export const TrackingRetrieveScreen: React.FC<TrackingRetrieveScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => {
        if (s >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return s;
        }
        return s + 1;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Retrieval in Progress</h3>
          <span className="text-2xl animate-bounce">🤖</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
          <div className="bg-white/50 p-2 rounded-lg">
            <div className="text-xs text-gray-500">From</div>
            <div className="font-bold">{DATA.slot}</div>
          </div>
          <div className="bg-white/50 p-2 rounded-lg">
            <div className="text-xs text-gray-500">Robot</div>
            <div className="font-bold">{DATA.robot}</div>
          </div>
          <div className="bg-white/50 p-2 rounded-lg">
            <div className="text-xs text-gray-500">ETA</div>
            <div className="font-bold text-blue-600">{DATA.eta}</div>
          </div>
        </div>

        <div className="space-y-2">
          {steps.map((s, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-[12px] transition-all ${i === step ? 'bg-white shadow-md' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${i < step ? 'bg-blue-500 text-white' : i === step ? 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-lg' : 'bg-gray-200 text-gray-400'}`}>
                {i < step ? '✓' : i + 1}
              </div>
              <span className={i <= step ? 'text-gray-800 font-medium' : 'text-gray-400'}>{s}</span>
              {i === step && <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse" />}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
