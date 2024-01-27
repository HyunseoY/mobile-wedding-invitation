import styled from '@emotion/styled';
import { flex, size } from '../../styles/mixins';
import { ColorsKey } from '../../styles/theme';
import { colors } from '../../styles/theme/colors';

export const Container = styled.div`
  ${flex.column({ align: 'center' })}
  margin-bottom: 15vh;
`;

export const CalenderBox = styled.div`
  ${flex.column({ align: 'center' })}

  margin: 35px 0;
`;

export const CalendarWrapper = styled.div`
  ${flex.column({ align: 'center' })};

  padding: 15px 0;

  .react-calendar {
    ${size({ width: '77%' })}
  }

  .react-calendar__month-view__weekdays {
    abbr {
      ${flex.center()};

      text-decoration: none;
      font-size: 0.85em;
      font-weight: 400;
      height: 6vh;
    }
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(1) {
    color: ${colors.pink};
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(7) {
    color: ${colors.blue};
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 8px 0;
    background: none;
    text-align: center;
    line-height: 16px;
  }

  .react-calendar__tile--specialDay {
    color: ${colors.white};

    abbr {
      background-color: ${colors.pink2};
      border-radius: 50%;
      padding: 6px 8px;
    }
  }

  .react-calendar__tile--sat {
    color: ${colors.blue};
  }

  .react-calendar__tile--sun {
    color: ${colors.pink};
  }
`;

export const Line = styled.span`
  display: block;
  width: 77%;
  height: 0.2px;
  background-color: ${colors.gray};
`;

export const Text = styled.p<{
  color?: ColorsKey;
  fontSize?: string;
  letterSpacing?: string;
}>`
  font-size: ${(props) => props.fontSize || '1em'};
  color: ${(props) => (props.color ? colors[props.color] : '#585858')};

  letter-spacing: ${(props) => props.letterSpacing || '0.1px'};
`;

export const DdayDott = styled.span`
  font-size: 12px;
  padding: 0 0 6px 0;
`;
