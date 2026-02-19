import React from 'react';

interface StatusBadgeProps {
    status: 'success' | 'pending' | 'active' | 'neutral';
    children: React.ReactNode;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, children }) => {
    const styles = {
        success: 'bg-emerald-100/80 text-emerald-700 border border-emerald-200/50',
        pending: 'bg-amber-100/80 text-amber-700 border border-amber-200/50',
        active: 'bg-teal-100/80 text-teal-700 border border-teal-200/50',
        neutral: 'bg-gray-100/80 text-gray-600 border border-gray-200/50'
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
            {status === 'success' && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />}
            {status === 'active' && <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-1.5 animate-pulse" />}
            {children}
        </span>
    );
};