import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

type ActionType = 'PARK' | 'RETRIEVE' | null;

interface ActionSelectScreenProps {
  onSelect: (action: ActionType) => void;
}

export const ActionSelectScreen: React.FC<ActionSelectScreenProps> = ({ onSelect }) => {
  const [confirm, setConfirm] = useState<ActionType>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-6">What would you like?</h2>
      
      <Card className="cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => setConfirm('PARK')}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-2xl shadow-lg">🚗</div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Park Vehicle</h3>
            <p className="text-sm text-gray-500">Robot will secure your vehicle</p>
          </div>
        </div>
      </Card>

      <Card className="cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => setConfirm('RETRIEVE')}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-2xl shadow-lg">🔑</div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Retrieve Vehicle</h3>
            <p className="text-sm text-gray-500">Get your vehicle back</p>
          </div>
        </div>
      </Card>

      {confirm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <Card className="w-full max-w-sm">
            <h3 className="text-lg font-semibold text-center mb-4">Confirm {confirm === 'PARK' ? 'Parking' : 'Retrieval'}?</h3>
            <div className="space-y-2">
              <Button onClick={() => onSelect(confirm)}>Yes, Continue</Button>
              <Button variant="secondary" onClick={() => setConfirm(null)}>Cancel</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
