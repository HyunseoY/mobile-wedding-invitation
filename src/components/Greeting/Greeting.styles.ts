import styled from '@emotion/styled';
import { flex } from '../../styles/mixins';

export const Container = styled.div`
  ${flex.column({ align: 'center' })}
`;

export const Content = styled.p`
  white-space: pre-wrap;
  text-align: center;
  line-height: 4vh;
  padding: 3vh 0;
`;
