import {
  faLock,
  faLockOpen,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import map from '../../assets/map.png';
import { FlexCenter, FlexColumn } from '../../styles/mixins';
import { colors } from '../../styles/theme/colors';
import { Title, useModal } from '../common';
import * as Styled from './Directions.styles';

export const MAP_IMAGE = 'MAP_IMAGE';

export const Directions = () => {
  const { mount } = useModal();
  const [isMapLocked, setMapLocked] = useState(true);
  const position = { lat: 35.151477, lng: 129.061116 };

  const [loading, error] = useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAO_API_KEY || 'default-app-key', // 발급 받은 APPKEY
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
        <Styled.Text fontSize="18px">헤리움 웨딩홀, E동 2층</Styled.Text>
        <Styled.Text fontSize="16px" color="gray6">
          부산 부산진구 중앙대로 666번길 50
        </Styled.Text>
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
        <Styled.Text>네비게이션</Styled.Text>
        <Styled.Text>원하시는 앱을 선택하시면 길안내가 시작됩니다.</Styled.Text>
        <Styled.Line />
      </Styled.Transportation>
    </>
  );
};
