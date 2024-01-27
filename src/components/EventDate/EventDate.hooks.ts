import { isSameDay } from 'date-fns';
import { useState } from 'react';
import { CalendarProps } from 'react-calendar';
import { TimeLeft, Value } from './EventDate.types';

export const useEventDate = () => {
  const [value, setValue] = useState<Value>(new Date(2024, 4, 25));

  const handleDateChange: CalendarProps['onChange'] = (value, event) => {
    setValue(value as Date | [Date, Date]);
  };

  const tileClassName: CalendarProps['tileClassName'] = ({ date, view }) => {
    const specialDate = new Date(2024, 4, 25);

    if (view === 'month') {
      if (isSameDay(date, specialDate)) {
        return 'react-calendar__tile--specialDay';
      }

      if (date.getDay() === 6) {
        return 'react-calendar__tile--sat';
      }

      if (date.getDay() === 0) {
        return 'react-calendar__tile--sun';
      }
    }
  };

  const tileDisabled: CalendarProps['tileDisabled'] = ({ date, view }) => {
    const specialDate = new Date(2024, 4, 25);

    if (view === 'month') {
      return !isSameDay(date, specialDate);
    }

    return true;
  };

  const calculateCountdown = (endDate: Date): TimeLeft | null => {
    const diff = endDate.getTime() - new Date().getTime();

    // don't start counting if the date is passed
    if (diff <= 0) return null;

    const timeLeft: TimeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateCountdown(new Date('2024-05-25T00:00:00'))
  );

  return {
    value,
    setValue,
    handleDateChange,
    tileClassName,
    tileDisabled,
    calculateCountdown,
    timeLeft,
    setTimeLeft,
  };
};
