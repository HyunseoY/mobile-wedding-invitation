import { isSameDay } from 'date-fns';
import { useState } from 'react';
import { CalendarProps } from 'react-calendar';
import { Value } from './EventDate.types';

export const useEventDate = () => {
  const [value, setValue] = useState<Value>(new Date());

  const handleDateChange: CalendarProps['onChange'] = (value, event) => {
    setValue(value as Date | [Date, Date]);
  };

  const tileClassName: CalendarProps['tileClassName'] = ({ date, view }) => {
    const specialDate = new Date(2024, 4, 25);

    if (view === 'month' && isSameDay(date, specialDate)) {
      return 'specialDay';
    }
  };

  const tileDisabled: CalendarProps['tileDisabled'] = ({ date, view }) => {
    const specialDate = new Date(2024, 4, 25);

    if (view === 'month') {
      return !isSameDay(date, specialDate);
    }

    return true;
  };

  return { value, setValue, handleDateChange, tileClassName, tileDisabled };
};
