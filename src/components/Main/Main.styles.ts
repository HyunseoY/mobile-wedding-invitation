import styled from '@emotion/styled';
import { colors } from '../../styles/theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 10vh;
  padding: 50px 0;
  background: linear-gradient(${colors.pink} 50%, transparent 50%);
`;

export const MainImage = styled.img`
  width: 90%;
`;

export const DateImage = styled.img`
  position: relative;
  width: 77%;
  margin-top: 5%;
`;

// export const TextBox = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 77%;
//   bottom: 10vh;
//   z-index: 1;
// `;

// export const Text = styled.span`
//   padding: 0.5vh 0 0 10vh;
//   color: ${colors.content1};
// `;
