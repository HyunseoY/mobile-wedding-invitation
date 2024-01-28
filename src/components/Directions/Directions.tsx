import {
  faLock,
  faLockOpen,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import kakaomap from '../../assets/kakaomap.png';
import map from '../../assets/map.png';
import navermap from '../../assets/navermap.png';
import tmap from '../../assets/tmap.svg';
import { Flex, FlexCenter, FlexColumn } from '../../styles/mixins';
import { colors } from '../../styles/theme/colors';
import { Text, Title, useModal } from '../common';
import { useDirections } from './\bDirections.hooks';
import * as Styled from './Directions.styles';

export const MAP_IMAGE = 'MAP_IMAGE';

export const Directions = () => {
  const { mount } = useModal();
  const app = useDirections();

  const [isMapLocked, setMapLocked] = useState(true);
  const position = { lat: 35.151477, lng: 129.061116 };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, error] = useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAO_API_KEY || 'default-app-key',
  });

  const handleLockToggle = () => {
    setMapLocked(!isMapLocked);
  };

  const clickModalOpenHandler = () => {
    mount(<Styled.MapImg src={map} />, { id: MAP_IMAGE });
  };

  return (
    <>
      <Title subTitle="LOCATION" title="오시는 길" />

      <FlexColumn align="center" marginTop={35} gap={15}>
        <Text fontSize="18px" text="헤리움 웨딩홀, E동 2층" />
        <Text
          fontSize="16px"
          color="gray6"
          text="부산 부산진구 중앙대로 666번길 50"
        />

        <Styled.Text
          fontSize="14px"
          color="gray5"
          style={{ marginTop: '15px' }}
        >
          Tel. 051-943-1004
        </Styled.Text>
      </FlexColumn>

      <div
        style={{
          position: 'relative',
          pointerEvents: isMapLocked ? 'none' : 'auto',
        }}
      >
        <Map
          center={position}
          level={5}
          style={{ width: '100%', height: '300px', margin: '35px 0 15px 0' }}
        >
          <MapMarker position={position} />
        </Map>
        <Styled.LockToggle onClick={handleLockToggle}>
          {isMapLocked ? (
            <FontAwesomeIcon icon={faLock} />
          ) : (
            <FontAwesomeIcon icon={faLockOpen} />
          )}
        </Styled.LockToggle>
      </div>

      <FlexCenter>
        <Styled.Button onClick={clickModalOpenHandler}>
          <FontAwesomeIcon icon={faMapLocationDot} color={colors.gray6} />
          &nbsp;&nbsp; 약도 이미지 보기
        </Styled.Button>
      </FlexCenter>

      <Styled.Transportation>
        <FlexColumn gap={20} marginTop={25}>
          <Text fontSize="14px" color="realBlack" text="네비게이션" />
          <Text
            fontSize="13px"
            color="content2"
            text="원하시는 앱을 선택하시면 길안내가 시작됩니다."
          />
        </FlexColumn>

        <FlexCenter gap={5} marginTop={15}>
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
        </FlexCenter>

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
    </>
  );
};
