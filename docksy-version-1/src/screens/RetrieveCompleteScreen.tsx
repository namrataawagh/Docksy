import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface RetrieveCompleteScreenProps {
  onClose: () => void;
}

const DATA = {
  plate: 'KA01AB1234',
  duration: '1h 45m',
};

export const RetrieveCompleteScreen: React.FC<RetrieveCompleteScreenProps> = ({ onClose }) => (
  <div className="space-y-4 text-center animate-fade-in">
    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-4xl shadow-lg animate-pulse mb-2">
      🚗
    </div>
    <h2 className="text-2xl font-bold text-gray-800">Vehicle Ready!</h2>
    <p className="text-gray-500 mb-4">Your vehicle is at the pickup bay</p>

    <Card>
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[16px] border border-emerald-100 mb-4">
        <h3 className="font-semibold text-emerald-800 mb-3">Retrieval Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Plate</span>
            <span className="font-mono font-bold">{DATA.plate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Duration</span>
            <span>{DATA.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Paid</span>
            <span className="text-emerald-600 font-bold">₹104</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500">Receipt sent to your mobile</p>
    </Card>

    <Button onClick={onClose}>Done</Button>
  </div>
);
