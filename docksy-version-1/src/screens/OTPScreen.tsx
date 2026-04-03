import React, { useState, useRef } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface OTPScreenProps {
  onVerify: () => void;
}

export const OTPScreen: React.FC<OTPScreenProps> = ({ onVerify }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (i: number, v: string) => {
    if (!/^\d*$/.test(v)) return;
    const newOtp = [...otp];
    newOtp[i] = v[0] || '';
    setOtp(newOtp);
    if (v && i < 5) inputs.current[i + 1]?.focus();
    if (i === 5 && v) handleVerify();
  };

  const handleVerify = () => {
    setLoading(true);
    setTimeout(onVerify, 1500);
  };

  return (
    <div className="space-y-4">
      <Card>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Verify Identity</h3>
        <p className="text-sm text-gray-500 mb-4">Enter 6-digit OTP</p>
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((d, i) => (
            <input
              key={i}
              ref={el => inputs.current[i] = el}
              value={d}
              onChange={e => handleChange(i, e.target.value)}
              className="w-11 h-14 text-center text-xl font-bold bg-white/60 border border-white/50 rounded-[12px] focus:border-teal-400 outline-none shadow-inner"
              maxLength={1}
            />
          ))}
        </div>
        <Button onClick={handleVerify} loading={loading} disabled={otp.some(x => !x)}>Verify</Button>
      </Card>
    </div>
  );
};
