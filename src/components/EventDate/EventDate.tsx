import { formatDate } from 'date-fns';
import Calendar from 'react-calendar';
import { useEventDate } from './EventDate.hooks';
import * as Styled from './EventDate.styles';

export const EventDate = () => {
  const app = useEventDate();

  return (
    <Styled.Container>
      <Styled.Line />
      <Styled.CalendarWrapper>
        <Calendar
          onChange={app.handleDateChange}
          value={app.value}
          calendarType="hebrew"
          tileClassName={app.tileClassName}
          tileDisabled={app.tileDisabled}
          formatDay={(locale, date) => formatDate(date, 'd')}
          showNavigation={false}
          showNeighboringMonth={false}
        />
      </Styled.CalendarWrapper>
      <Styled.Line />
    </Styled.Container>
  );
};
