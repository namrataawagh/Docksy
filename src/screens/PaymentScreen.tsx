import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface PaymentScreenProps {
  onPay: () => void;
}

const DATA = {
  duration: '1h 45m',
  rate: 50,
  gst: 18,
};

export const PaymentScreen: React.FC<PaymentScreenProps> = ({ onPay }) => {
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  const hours = 1.75;
  const subtotal = Math.round(hours * DATA.rate);
  const gstAmount = Math.round(subtotal * (DATA.gst / 100));
  const total = subtotal + gstAmount;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaid(true);
      setTimeout(onPay, 1500);
    }, 1500);
  };

  if (paid) {
    return (
      <div className="text-center py-10 animate-fade-in">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-4xl shadow-lg animate-pulse mb-4">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Payment Successful!</h2>
        <p className="text-gray-500 mt-2">Processing retrieval...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center text-gray-800">Payment</h2>
      
      <Card>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Duration</span>
            <span className="font-medium">{DATA.duration}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Rate</span>
            <span className="font-medium">₹{DATA.rate}/hr</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹{subtotal}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">GST ({DATA.gst}%)</span>
            <span className="font-medium">₹{gstAmount}</span>
          </div>
          <div className="flex justify-between pt-2 text-lg font-bold">
            <span>Total</span>
            <span className="text-teal-600">₹{total}</span>
          </div>
        </div>
      </Card>

      <Button onClick={handlePay} loading={loading}>Pay ₹{total}</Button>
    </div>
  );
};
