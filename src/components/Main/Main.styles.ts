import styled from '@emotion/styled';
import { flex } from '../../styles/mixins';
import { colors } from '../../styles/theme/colors';

export const Container = styled.div`
  ${flex.column({ align: 'center' })}
  margin: auto;
  margin-bottom: 10vh;
  padding: 50px 0;
  background: linear-gradient(${colors.pink} 50%, transparent 50%);
`;

export const MainImage = styled.img`
  width: 90%;
  padding-top: 5%;
`;

export const DateImage = styled.img`
  position: relative;
  width: 77%;
  margin-top: 5%;
`;
