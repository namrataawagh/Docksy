import { useState, useCallback, useRef } from 'react';
import type { StageType, ActionType } from '../types';

export const useStageManager = () => {
    const [stage, setStage] = useState<StageType>('SCAN');
    const [selectedAction, setSelectedAction] = useState<ActionType>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const transitionTo = useCallback((newStage: StageType, delay: number = 0) => {
        if (isTransitioning) return;

        setIsTransitioning(true);

        if (transitionRef.current) {
            clearTimeout(transitionRef.current);
        }

        transitionRef.current = setTimeout(() => {
            setStage(newStage);
            setIsTransitioning(false);
        }, delay);
    }, [isTransitioning]);

    const goToOTP = useCallback(() => {
        transitionTo('OTP', 300);
    }, [transitionTo]);

    const goToActionSelect = useCallback(() => {
        transitionTo('ACTION_SELECT', 300);
    }, [transitionTo]);

    const selectAction = useCallback((action: ActionType) => {
        setSelectedAction(action);
        transitionTo('CONDITION', 300);
    }, [transitionTo]);

    const goToTracking = useCallback(() => {
        if (selectedAction === 'PARK') {
            transitionTo('TRACKING_PARK', 300);
        } else {
            transitionTo('TRACKING_RETRIEVE', 300);
        }
    }, [selectedAction, transitionTo]);

    const completePark = useCallback(() => {
        transitionTo('PARK_COMPLETE', 300);
    }, [transitionTo]);

    const goToPayment = useCallback(() => {
        transitionTo('PAYMENT', 300);
    }, [transitionTo]);

    const completeRetrieve = useCallback(() => {
        transitionTo('RETRIEVE_COMPLETE', 300);
    }, [transitionTo]);

    const reset = useCallback(() => {
        setStage('SCAN');
        setSelectedAction(null);
        setIsTransitioning(false);
        if (transitionRef.current) {
            clearTimeout(transitionRef.current);
        }
    }, []);

    return {
        stage,
        selectedAction,
        isTransitioning,
        transitionTo,
        goToOTP,
        goToActionSelect,
        selectAction,
        goToTracking,
        completePark,
        goToPayment,
        completeRetrieve,
        reset
    };
};