import React from 'react';
import { CheckIcon } from './icons';

interface Step {
    id: string;
    label: string;
    status: 'pending' | 'active' | 'completed';
}

interface StepperProps {
    steps: Step[];
    activeStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
    return (
        <div className="space-y-3">
            {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                    <div
                        key={step.id}
                        className={`
              flex items-center gap-3 p-3 rounded-[16px] transition-all duration-500
              ${isActive ? 'bg-white/80 shadow-neu-sm' : 'bg-transparent'}
            `}
                    >
                        <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
              transition-all duration-500
              ${isCompleted ? 'bg-teal-500 text-white' :
                                isActive ? 'step-active' : 'bg-gray-200/50 text-gray-400'}
            `}>
                            {isCompleted ? <CheckIcon size={16} /> : index + 1}
                        </div>

                        <div className="flex-1">
                            <p className={`text-sm font-medium transition-colors duration-300
                ${isActive ? 'text-gray-800' : isCompleted ? 'text-teal-700' : 'text-gray-400'}`}>
                                {step.label}
                            </p>
                        </div>

                        {isActive && (
                            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        )}
                    </div>
                );
            })}
        </div>
    );
};