// src/screens/PhoneScreen.tsx
import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface PhoneScreenProps {
    onSubmit: () => void;
}

export const PhoneScreen: React.FC<PhoneScreenProps> = ({ onSubmit }) => {
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        if (phone.length >= 10) {
            onSubmit();
        }
    };

    return (
        <div className="space-y-4 animate-fade-in">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Enter Mobile Number</h2>
                <p className="text-gray-500">We'll send an OTP to verify</p>
            </div>

            <Card>
                <div className="space-y-4">
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">📱</span>
                        <input
                            type="tel"
                            placeholder="Enter 10-digit mobile number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            className="w-full bg-white/60 border border-white/50 rounded-[16px] pl-12 pr-4 py-4 text-gray-800 placeholder-gray-400 outline-none focus:border-teal-400 transition-all"
                        />
                    </div>

                    <Button
                        onClick={handleSubmit}
                        disabled={phone.length < 10}
                    >
                        Send OTP
                    </Button>
                </div>
            </Card>

            <p className="text-center text-xs text-gray-400">
                Standard carrier rates may apply
            </p>
        </div>
    );
};