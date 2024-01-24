import styled from '@emotion/styled';
import { flex } from '../../../styles/mixins';
import { colors } from '../../../styles/theme/colors';

export const Container = styled.div`
  ${flex.column({ align: 'center' })}
  line-height: 2.5vh;
`;

export const SubTitle = styled.span`
  color: ${colors.pink};
  margin-bottom: 1vh;
  letter-spacing: 3px;
  font-size: 0.75rem;
`;

export const Title = styled.p`
  color: ${colors.pink};
  font-size: large;
  font-weight: bold;
`;
