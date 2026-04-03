export type StageType = 
  | 'SCAN' 
  | 'OTP' 
  | 'ACTION_SELECT' 
  | 'CONDITION' 
  | 'TRACKING_PARK' 
  | 'PARK_COMPLETE' 
  | 'PAYMENT' 
  | 'TRACKING_RETRIEVE' 
  | 'RETRIEVE_COMPLETE';

export interface VehicleData {
  plate: string;
  robot: string;
  slot: string;
  eta: string;
  entryTime: string;
  duration: string;
  rate: number;
  gst: number;
}

export const HARDCODED_DATA: VehicleData = {
  plate: 'KA01AB1234',
  robot: 'RB-07',
  slot: 'B2-14',
  eta: '2m 30s',
  entryTime: '21:00, 11 November 2020',
  duration: '1h 45m',
  rate: 50,
  gst: 18,
};

export interface Step {
  id: string;
  label: string;
  status: 'pending' | 'active' | 'completed';
}

export type ActionType = 'PARK' | 'RETRIEVE' | null;