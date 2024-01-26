import styled from '@emotion/styled';
import { flex, size } from '../../styles/mixins';
import { colors } from '../../styles/theme/colors';

export const Container = styled.div`
  ${flex.column()}
`;

export const CalendarWrapper = styled.div`
  ${flex.column({ align: 'center' })};

  padding: 15px 0;

  .react-calendar {
    ${flex.column({ align: 'center' })};
    ${size({ width: '85%' })};

    border: none;
  }

  .react-calendar__month-view__weekdays__weekday {
    ${flex({ justify: 'center', align: 'center' })};

    width: 100%;

    abbr[title] {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.85em;
  }

  .react-calendar__month-view__weekdays {
    abbr {
      ${flex({ justify: 'center', align: 'center' })};

      font-weight: 400;
      height: 6vh;
    }
  }
  .react-calendar__month-view__days {
    height: 120%;
  }

  .react-calendar__tile--now {
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 8px 0;
    background: none;
    text-align: center;
    line-height: 16px;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border-radius: 50%;
  }
`;

export const Line = styled.span`
  display: block;
  height: 0.2px;
  background-color: ${colors.gray};
`;
