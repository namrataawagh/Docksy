import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { CameraIcon, CheckIcon } from '../components/icons';

interface ConditionScreenProps {
  onConfirm: () => void;
}

export const ConditionScreen: React.FC<ConditionScreenProps> = ({ onConfirm }) => {
  const [photos, setPhotos] = useState([false, false, false]);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Simulate sequential photo capture
    const capturePhotos = async () => {
      for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 600));
        setPhotos(prev => {
          const newPhotos = [...prev];
          newPhotos[i] = true;
          return newPhotos;
        });
      }
    };
    
    const now = new Date();
    setTimestamp(now.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }));
    
    capturePhotos();
  }, []);

  const allCaptured = photos.every(p => p);

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Vehicle Condition</h2>
        <p className="text-sm text-gray-500">Capturing pre-condition photos</p>
      </div>

      <Card>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {photos.map((captured, index) => (
            <div 
              key={index}
              className={`
                aspect-square rounded-[16px] flex items-center justify-center
                transition-all duration-500
                ${captured 
                  ? 'bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-200' 
                  : 'bg-gray-100/50 border-2 border-dashed border-gray-300'}
              `}
            >
              {captured ? (
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckIcon className="text-teal-600" size={20} />
                  </div>
                  <span className="text-xs text-teal-600 font-medium">Captured</span>
                </div>
              ) : (
                <CameraIcon className="text-gray-300 animate-pulse" size={24} />
              )}
            </div>
          ))}
        </div>

        <div className="p-3 bg-teal-50/50 rounded-[12px] border border-teal-100 mb-4">
          <p className="text-xs text-teal-700 text-center font-medium">
            📸 Vehicle Condition Logged
          </p>
          <p className="text-xs text-teal-600 text-center mt-1">{timestamp}</p>
        </div>

        <Button 
          onClick={onConfirm}
          disabled={!allCaptured}
        >
          {allCaptured ? 'Confirm & Continue' : 'Capturing...'}
        </Button>
      </Card>
    </div>
  );
};