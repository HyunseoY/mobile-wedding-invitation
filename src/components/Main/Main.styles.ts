import styled from '@emotion/styled';
import { colors } from '../../styles/theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  text-align: center;
  padding: 50px 0;
  color: white;
  text-shadow: 1px 1px 1px #bc8989;
  background: linear-gradient(
    ${colors.pink} 45%,
    ${colors.pink} 45%,
    transparent 45%,
    transparent 100%
  );
`;

export const Title = styled.h1`
  position: absolute;
  top: 60px;
  font-size: 30px;
`;

export const NameImage = styled.img`
  position: relative;
  width: 90%;
  height: 100px;
  padding: 20px;
  top: -460px;
  object-fit: contain;
`;

export const MainImage = styled.img`
  position: relative;
  width: 80%;
  top: 40px;
`;

export const Datebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.content1};
  text-shadow: none;
`;

export const DateImage = styled.img`
  position: relative;
  width: 80%;
  top: -70px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 70px;
`;

export const NameText = styled.span`
  position: absolute;
  width: 60%;
  bottom: 235px;
`;
export const PlaceText = styled.span`
  position: absolute;
  width: 60%;
  bottom: 215px;
`;

export const DateText = styled.span`
  position: absolute;
  width: 60%;
  bottom: 194px;
`;
