import styled from '@emotion/styled';
import { flex } from '../../styles/mixins';
import { colors } from '../../styles/theme/colors';

export const Container = styled.div`
  ${flex.column({ align: 'center' })}
`;

export const Content = styled.p<{ margin?: boolean }>`
  white-space: pre-wrap;
  text-align: center;
  line-height: 4vh;
  padding: 3vh 0 0 0;
  margin: ${(props) => (props.margin ? '3vh' : '0')};
`;

export const Line = styled.span`
  width: 15%;
  height: 1px;
  background-color: ${colors.gray};
`;
