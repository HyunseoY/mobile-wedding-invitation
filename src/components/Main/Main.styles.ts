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
  background: linear-gradient(${colors.pink} 50%, transparent 50%);
`;

export const Title = styled.h1`
  position: absolute;
  top: 6vh;
  font-size: 30px;

  @media (max-width: 768px) {
    top: 7vh;
    font-size: 25px;
  }
`;

export const NameImage = styled.img`
  width: 90%;
  height: 100px;
  padding: 20px;
  object-fit: contain;
  z-index: 2;
`;

export const MainImage = styled.img`
  position: relative;
  width: 80%;
  top: 40px;
  margin-top: -15vh;
  z-index: 1;
`;

// export const Datebox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: ${colors.content1};
//   text-shadow: none;
// `;

export const DateImage = styled.img`
  position: relative;
  width: 80%;
  top: 10vh;
`;

// export const TextBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 0 0 0 70px;
// `;

// export const NameText = styled.span`
//   position: absolute;
//   width: 60%;
//   bottom: 235px;
// `;
// export const PlaceText = styled.span`
//   position: absolute;
//   width: 60%;
//   bottom: 215px;
// `;

// export const DateText = styled.span`
//   position: absolute;
//   width: 60%;
//   bottom: 194px;
// `;
