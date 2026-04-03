import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface ParkCompleteScreenProps {
  onClose: () => void;
}

const DATA = {
  plate: 'KA01AB1234',
  slot: 'B2-14',
  entryTime: '21:00, 11 Nov 2020',
};

export const ParkCompleteScreen: React.FC<ParkCompleteScreenProps> = ({ onClose }) => (
  <div className="space-y-4 text-center animate-fade-in">
    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-4xl shadow-lg animate-pulse mb-2">
      ✓
    </div>

    <h2 className="text-2xl font-bold text-gray-800">Parking Complete!</h2>
    <p className="text-gray-500 mb-4">Your vehicle is safely parked</p>

    <Card>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between p-2 bg-white/40 rounded-lg">
          <span className="text-gray-600">Plate</span>
          <span className="font-mono font-bold">{DATA.plate}</span>
        </div>

        <div className="flex justify-between p-2 bg-emerald-50 rounded-lg">
          <span className="text-gray-600">Slot</span>
          <span className="font-bold text-emerald-600">{DATA.slot}</span>
        </div>

        <div className="flex justify-between p-2 bg-white/40 rounded-lg">
          <span className="text-gray-600">Entry Time</span>
          <span>{DATA.entryTime}</span>
        </div>
      </div>

      {/* Updated section */}
      <div className="mt-4 p-3 bg-teal-50 rounded-[12px] text-center">
        <p className="text-sm text-teal-700">
          To retrieve your vehicle, login and select "Retrieve Vehicle"
        </p>
      </div>
    </Card>

    <Button onClick={onClose}>Close</Button>
  </div>
);
