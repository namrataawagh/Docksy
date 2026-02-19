import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface ScanScreenProps {
  onContinue: () => void;
}

const DATA = {
  plate: 'KA01AB1234',
  entryTime: '21:00, 11 November 2020',
};

export const ScanScreen: React.FC<ScanScreenProps> = ({ onContinue }) => {
  const [progress, setProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setScanComplete(true);
          return 100;
        }
        return p + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4 animate-fade-in">
      <Card className="relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Scan QR Code</h3>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${scanComplete ? 'bg-emerald-100 text-emerald-700' : 'bg-teal-100 text-teal-700'}`}>
            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${scanComplete ? 'bg-emerald-500' : 'bg-teal-500 animate-pulse'}`} />
            {scanComplete ? 'Scanned' : 'Scanning'}
          </span>
        </div>

        <div className="relative aspect-square max-w-[200px] mx-auto mb-4 rounded-[16px] bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-dashed border-teal-300/50 flex items-center justify-center overflow-hidden">
          <span className="text-6xl">📷</span>

          {!scanComplete && (
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-ping top-1/2"
              style={{ boxShadow: '0 0 10px rgba(20, 184, 166, 0.8)' }} />
          )}

          <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-teal-500 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-teal-500 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-teal-500 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-teal-500 rounded-br-lg" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Session Progress</span>
            <span className="text-teal-600 font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-gray-200/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 transition-all duration-100 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl">🛡️</span>
          <h4 className="font-semibold text-gray-800">Session Valid</h4>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Plate Number</span>
            <span className="font-mono font-semibold text-gray-800">{DATA.plate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Time Remaining</span>
            <div className="flex items-center gap-1 text-amber-600">
              <span>⏱️</span>
              <span className="font-mono font-semibold">05:00</span>
            </div>
          </div>
        </div>
      </Card>

      <Button
        onClick={onContinue}
        disabled={!scanComplete}
      >
        {scanComplete ? 'Continue' : 'Scanning...'}
      </Button>
    </div>
  );
};