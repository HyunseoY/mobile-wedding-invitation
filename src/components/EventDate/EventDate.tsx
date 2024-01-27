import { formatDate } from 'date-fns';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import { Flex, FlexColumn } from '../../styles/mixins';
import { useEventDate } from './EventDate.hooks';
import * as Styled from './EventDate.styles';

export const EventDate = () => {
  const app = useEventDate();

  useEffect(() => {
    const timer = setInterval(() => {
      app.setTimeLeft(app.calculateCountdown(new Date('2024-05-25T00:00:00')));
    }, 1000);

    return () => clearInterval(timer);
  }, [app]);

  return (
    <Styled.Container>
      <FlexColumn align="center" gap={15}>
        <Styled.Text fontSize="20px">2024.05.25</Styled.Text>
        <Styled.Text fontSize="medium" color="content2">
          토요일 오전 11시
        </Styled.Text>
      </FlexColumn>
      <Styled.CalenderBox>
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
      </Styled.CalenderBox>
      <div>
        {app.timeLeft ? (
          <FlexColumn gap={25}>
            <Flex justify="center" align="end" gap={5}>
              <FlexColumn align="center" gap={5}>
                <Styled.Text as="span" fontSize="10px" color="gray3">
                  DAYS
                </Styled.Text>
                <Styled.Text as="span" fontSize="24px">
                  {app.timeLeft.days}
                </Styled.Text>
              </FlexColumn>

              <Styled.DdayDott>:</Styled.DdayDott>

              <FlexColumn align="center" gap={5}>
                <Styled.Text as="span" fontSize="10px" color="gray3">
                  HOUR
                </Styled.Text>
                <Styled.Text as="span" fontSize="24px">
                  {app.timeLeft.hours}
                </Styled.Text>
              </FlexColumn>

              <Styled.DdayDott>:</Styled.DdayDott>

              <FlexColumn align="center" gap={5}>
                <Styled.Text as="span" fontSize="10px" color="gray3">
                  MIN
                </Styled.Text>
                <Styled.Text as="span" fontSize="24px">
                  {app.timeLeft.minutes}
                </Styled.Text>
              </FlexColumn>

              <Styled.DdayDott>:</Styled.DdayDott>

              <FlexColumn align="center" gap={5}>
                <Styled.Text as="span" fontSize="10px" color="gray3">
                  SEC
                </Styled.Text>
                <Styled.Text as="span" fontSize="24px">
                  {app.timeLeft.seconds}
                </Styled.Text>
              </FlexColumn>
            </Flex>

            <Styled.Text fontSize="14px">
              라희, 지현의 결혼식이&nbsp;
              <Styled.Text as="span" color="pink" fontSize="18px">
                {app.timeLeft.days}
              </Styled.Text>
              일 남았습니다
            </Styled.Text>
          </FlexColumn>
        ) : (
          <FlexColumn gap={25}>
            <Flex justify="center" align="end" gap={5}>
              <FlexColumn align="center" gap={5}>
                <Styled.Text as="span" fontSize="10px" color="gray3">
                  DAYS
                </Styled.Text>
                <Styled.Text as="span" fontSize="24px">
                  00
                </Styled.Text>
              </FlexColumn>

              <Styled.DdayDott>:</Styled.DdayDott>

              <FlexColumn align="center" gap={5}>
                <Styled.Text as="span" fontSize="10px" color="gray3">
                  HOUR
                </Styled.Text>
                <Styled.Text as="span" fontSize="24px">
                  00
                </Styled.Text>
              </FlexColumn>

              <Styled.DdayDott>:</Styled.DdayDott>

              <FlexColumn align="center" gap={5}>
                <Styled.Text as="span" fontSize="10px" color="gray3">
                  MIN
                </Styled.Text>
                <Styled.Text as="span" fontSize="24px">
                  00
                </Styled.Text>
              </FlexColumn>

              <Styled.DdayDott>:</Styled.DdayDott>

              <FlexColumn align="center" gap={5}>
                <Styled.Text as="span" fontSize="10px" color="gray3">
                  SEC
                </Styled.Text>
                <Styled.Text as="span" fontSize="24px">
                  00
                </Styled.Text>
              </FlexColumn>
            </Flex>
            <Styled.Text fontSize="14px">
              오늘은 라희, 지현의 결혼식입니다
            </Styled.Text>
          </FlexColumn>
        )}
      </div>
    </Styled.Container>
  );
};
