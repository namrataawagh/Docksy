import React from 'react';

interface IconProps {
    className?: string;
    size?: number;
}

export const DashboardIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" opacity="0.8" />
        <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" opacity="0.6" />
        <rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor" opacity="0.6" />
        <rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" opacity="0.4" />
    </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="9" cy="8" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="16" cy="8" r="2" fill="currentColor" opacity="0.6" />
        <path d="M4 18C4 15.7909 5.79086 14 8 14H10C12.2091 14 14 15.7909 14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 18C14 16.3431 15.3431 15 17 15H18C19.6569 15 21 16.3431 21 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
);

export const MessageIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M8 10H16M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 12C21 16.9706 16.9706 21 12 21C10.5 21 9.075 20.6375 7.8 20L3 21L4.2 16.8C3.4375 15.4625 3 13.8875 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ChartIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10H21M8 2V6M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const WalletIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 11H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 11V7C3 5.89543 3.89543 5 5 5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const TransferIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M8 7H4M4 7L7 4M4 7L7 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17H20M20 17L17 14M20 17L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const AcademyIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 12L17 9.5L12 7L7 9.5L12 12Z" fill="currentColor" opacity="0.6" />
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 5C8.686 5 6 7.686 6 11V16L4 18H20L18 16V11C18 7.686 15.314 5 12 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="7" r="3" fill="#ef4444" stroke="white" strokeWidth="1.5" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CameraIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M8 6L9 4H15L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const RobotIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="9" cy="13" r="1.5" fill="currentColor" />
        <circle cx="15" cy="13" r="1.5" fill="currentColor" />
        <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 8V5M12 5L10 3M12 5L14 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12H4M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M5 17H19C20.1046 17 21 16.1046 21 15V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V15C3 16.1046 3.89543 17 5 17Z" stroke="currentColor" strokeWidth="2" />
        <path d="M7 17V19C7 19.5523 6.55228 20 6 20H5C4.44772 20 4 19.5523 4 19V17" stroke="currentColor" strokeWidth="2" />
        <path d="M20 17V19C20 19.5523 19.5523 20 19 20H18C17.4477 20 17 19.5523 17 19V17" stroke="currentColor" strokeWidth="2" />
        <path d="M6 9L8 5H16L18 9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="7.5" cy="13" r="1" fill="currentColor" />
        <circle cx="16.5" cy="13" r="1" fill="currentColor" />
    </svg>
);

export const QRIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14H17V17H14V14Z" stroke="currentColor" strokeWidth="2" />
        <path d="M17 17H20V20H17V17Z" stroke="currentColor" strokeWidth="2" />
        <path d="M14 20H17V21H14V20Z" stroke="currentColor" strokeWidth="2" />
        <path d="M20 14V17H21V14H20Z" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M22 16.92V19.92C22 20.4704 21.6041 20.9367 21.0704 20.9927C20.5367 21.0487 20.0627 20.677 19.93 20.16C19.5 18.5 18.68 16.93 17.5 15.55C16.32 14.17 14.83 13.18 13.16 12.68C12.64 12.53 12.23 12.08 12.16 11.54C12.09 11 12.36 10.48 12.82 10.22L14.6 9.2C15.06 8.94 15.64 9.02 16.02 9.4L17.44 10.82C18.36 9.93 19.05 8.85 19.47 7.65C19.63 7.18 20.07 6.86 20.57 6.91L22.57 7.11C23.09 7.16 23.5 7.6 23.5 8.12V8.12C23.5 13.06 19.46 17.1 14.52 17.1H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 14.5C10.5 15.5 9 15.5 8 14.5C7 13.5 7 12 8 11L10.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const LockIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

export const ReceiptIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 4V20L8 18L12 20L16 18L20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 10H16M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);