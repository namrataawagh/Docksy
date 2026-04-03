import { useState } from 'react';
import { ScanScreen } from './screens/ScanScreen';
import { PhoneScreen } from './screens/PhoneScreen';
import { OTPScreen } from './screens/OTPScreen';
import { ActionSelectScreen } from './screens/ActionSelectScreen';
import { ConditionScreen } from './screens/ConditionScreen';
import { TrackingParkScreen } from './screens/TrackingParkScreen';
import { ParkCompleteScreen } from './screens/ParkCompleteScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { TrackingRetrieveScreen } from './screens/TrackingRetrieveScreen';
import { RetrieveCompleteScreen } from './screens/RetrieveCompleteScreen';

type StageType = 'SCAN' | 'PHONE' | 'OTP' | 'ACTION_SELECT' | 'CONDITION' | 'TRACKING_PARK' | 'PARK_COMPLETE' | 'PAYMENT' | 'TRACKING_RETRIEVE' | 'RETRIEVE_COMPLETE';
type ActionType = 'PARK' | 'RETRIEVE' | null;

function App() {
  const [stage, setStage] = useState<StageType>('SCAN');
  const [action, setAction] = useState<ActionType>(null);

  const renderScreen = () => {
    switch (stage) {
      case 'SCAN':
        return <ScanScreen onContinue={() => setStage('PHONE')} />;
      case 'PHONE':
        return <PhoneScreen onSubmit={() => setStage('OTP')} />;
      case 'OTP':
        return <OTPScreen onVerify={() => setStage('ACTION_SELECT')} />;
      case 'ACTION_SELECT':
        return <ActionSelectScreen onSelect={(a: ActionType) => { setAction(a); setStage('CONDITION'); }} />;
      case 'CONDITION':
        return <ConditionScreen onConfirm={() => setStage(action === 'PARK' ? 'TRACKING_PARK' : 'PAYMENT')} />;
      case 'TRACKING_PARK':
        return <TrackingParkScreen onComplete={() => setStage('PARK_COMPLETE')} />;
      case 'PARK_COMPLETE':
        return <ParkCompleteScreen onClose={() => setStage('SCAN')} />;
      case 'PAYMENT':
        return <PaymentScreen onPay={() => setStage('TRACKING_RETRIEVE')} />;
      case 'TRACKING_RETRIEVE':
        return <TrackingRetrieveScreen onComplete={() => setStage('RETRIEVE_COMPLETE')} />;
      case 'RETRIEVE_COMPLETE':
        return <RetrieveCompleteScreen onClose={() => setStage('SCAN')} />;
      default:
        return <ScanScreen onContinue={() => setStage('PHONE')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-gray-50 to-emerald-50 flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen p-5 pb-24">
        <header className="mb-6">
          <p className="text-xs text-teal-600 font-medium">Welcome back</p>
          <h1 className="text-2xl font-bold text-gray-800">Docksy</h1>
        </header>
        <main>{renderScreen()}</main>
      </div>
    </div>
  );
}

export default App;