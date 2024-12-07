'use client';

import { useState, useEffect, useMemo } from 'react';
// import { useApi } from '@/hooks/useApi';

interface CountdownSettings {
  startDate: string;
  endDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [status, setStatus] = useState<'not-started' | 'active' | 'ended'>('not-started');


 // Memoize the dummy settings
 const settings: CountdownSettings = useMemo(
    () => ({
      startDate: '2024-12-10T09:00:00Z', // Replace with your dummy start date
      endDate: '2024-12-15T17:00:00Z',   // Replace with your dummy end date
      isActive: true,                    // Set to true to activate the countdown
    }),
    []
  );


  useEffect(() => {
    

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const start = new Date(settings.startDate).getTime();
      const end = new Date(settings.endDate).getTime();

      if (now < start) {
        setStatus('not-started');
        const difference = start - now;
        return getTimeComponents(difference);
      } else if (now > end) {
        setStatus('ended');
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      } else {
        setStatus('active');
        const difference = end - now;
        return getTimeComponents(difference);
      }
    };

    const getTimeComponents = (difference: number) => {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [settings]);

  

  const getStatusMessage = () => {
    switch (status) {
      case 'not-started':
        return 'Time until election starts:';
      case 'active':
        return 'Time remaining to vote:';
      case 'ended':
        return 'Election has ended';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center">
      <h2 className="text-xl font-bold mb-4">{getStatusMessage()}</h2>
      {status !== 'ended' && (
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{timeLeft.days}</div>
            <div className="text-sm text-gray-600">Days</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{timeLeft.hours}</div>
            <div className="text-sm text-gray-600">Hours</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{timeLeft.minutes}</div>
            <div className="text-sm text-gray-600">Minutes</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{timeLeft.seconds}</div>
            <div className="text-sm text-gray-600">Seconds</div>
          </div>
        </div>
      )}
    </div>
  );
}
