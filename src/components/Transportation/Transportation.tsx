import kakaomap from '../../assets/kakaomap.png';
import navermap from '../../assets/navermap.png';
import tmap from '../../assets/tmap.svg';
import { Flex, FlexCenter, FlexColumn } from '../../styles/mixins';
import { Text } from '../common';
import { useTransportation } from './Transportation.hooks';
import * as Styled from './Transportation.styles';

export const Transportation = () => {
  const app = useTransportation();

  return (
    <FlexCenter>
      <Styled.Transportation>
        <FlexColumn gap={20} marginTop={25}>
          <Text fontSize="14px" color="realBlack" text="네비게이션" />
          <Text
            fontSize="13px"
            color="content2"
            text="원하시는 앱을 선택하시면 길안내가 시작됩니다."
          />
        </FlexColumn>

        <Flex gap={5} marginTop={15} align="center" justify="between">
          <Styled.AppButton onClick={app.openNaverMap}>
            <FlexCenter>
              <Styled.AppButtonImg src={navermap} alt="navermap" />
              네이버지도
            </FlexCenter>
          </Styled.AppButton>

          <Styled.AppButton onClick={app.openTmap}>
            <FlexCenter>
              <Styled.AppButtonImg src={tmap} alt="tmap" />
              티맵
            </FlexCenter>
          </Styled.AppButton>

          <Styled.AppButton onClick={app.openKakaoMap}>
            <FlexCenter>
              <Styled.AppButtonImg src={kakaomap} alt="kakaomap" />
              카카오지도
            </FlexCenter>
          </Styled.AppButton>
        </Flex>

        <Styled.Line />

        <FlexColumn gap={20} padding="10px 0">
          <Text fontSize="14px" color="realBlack" text="지하철" />

          <FlexColumn gap={7}>
            <Flex align="center">
              <Styled.Dott color="orange" />
              <Text
                fontSize="13px"
                color="content2"
                text="1호선 범내골역 8번 출구에서 도보 5분"
              />
            </Flex>

            <Flex align="center">
              <Styled.Dott color="green" />
              <Text
                fontSize="13px"
                color="content2"
                text="2호선 전포역 3번 출구에서 도보 5분"
              />
            </Flex>
          </FlexColumn>
        </FlexColumn>

        <Styled.Line />

        <FlexColumn gap={20} padding="10px 0">
          <Text fontSize="14px" color="realBlack" text="버스" />

          <FlexColumn gap={7}>
            <Text
              fontSize="13px"
              color="realBlack"
              text="서면 한전 (범내골 방면) 하차"
            />
            <Text
              fontSize="13px"
              color="content2"
              text="5-1, 10, 29, 43, 52, 57, 66, 80, 81, 83, 83-1, 86, 88, 99, 103, 108, 111, 124, 138, 167, 168, 583"
            />
            <Flex align="center">
              <Styled.Dott color="orange" />
              <Text
                fontSize="13px"
                color="content2"
                text="심야 : 1000, 1004, 1010"
              />
            </Flex>
          </FlexColumn>

          <FlexColumn gap={7}>
            <Text
              fontSize="13px"
              color="realBlack"
              text="서면 한전 (서면역, 서면지하상가 방면) 하차"
            />
            <Text
              fontSize="13px"
              color="content2"
              text="17, 20, 23, 24, 52, 66, 67, 68, 81, 83, 83-1, 86, 88, 99, 108, 138, 160, 167, 168, 169-1"
            />
            <Flex align="center">
              <Styled.Dott color="orange" />
              <Text fontSize="13px" color="content2" text="심야 : 1002, 1004" />
            </Flex>
          </FlexColumn>

          <FlexColumn gap={7}>
            <Text
              fontSize="13px"
              color="realBlack"
              text="경남공고 (서면 한전 방면) 하차"
            />
            <Text fontSize="13px" color="content2" text="20, 169-1" />
            <Flex align="center">
              <Styled.Dott color="orange" />
              <Text fontSize="13px" color="content2" text="심야 : 1002" />
            </Flex>
          </FlexColumn>

          <FlexColumn gap={7}>
            <Text
              fontSize="13px"
              color="realBlack"
              text="경남공고 (부전도서관 방면) 하차"
            />
            <Text
              fontSize="13px"
              color="content2"
              text="5-1, 10, 29, 43, 54, 57, 80, 103, 111, 133"
            />
          </FlexColumn>
        </FlexColumn>

        <Styled.Line />

        <FlexColumn gap={20} padding="10px 0">
          <Text fontSize="14px" color="realBlack" text="자가용" />

          <FlexColumn gap={7}>
            <Flex align="center">
              <Styled.Dott />
              <Text
                fontSize="13px"
                color="content2"
                text="네비게이션 : '헤리움 웨딩홀' 검색"
              />
            </Flex>
            <Text
              fontSize="13px"
              color="content2"
              margin="12px"
              text={`• 주소검색`}
            />
            <Text
              fontSize="13px"
              color="content2"
              margin="22px"
              text={`'부산 부산진구 중앙대로 666 50번길' 또는`}
            />
            <Text
              fontSize="13px"
              color="content2"
              margin="22px"
              text={`'부전동 537-9' 입력`}
            />
          </FlexColumn>

          <FlexColumn gap={7}>
            <Flex align="center">
              <Styled.Dott />
              <Text fontSize="13px" color="content2" text="주차장 안내" />
            </Flex>
            <Text
              fontSize="13px"
              color="content2"
              margin="12px"
              text={`• 더샵 센트럴스타 주차장 이용`}
            />
          </FlexColumn>
        </FlexColumn>
      </Styled.Transportation>
    </FlexCenter>
  );
};
