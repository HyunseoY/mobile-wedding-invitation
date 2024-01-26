import styled from '@emotion/styled';
import { flex, grid } from '../../styles/mixins';
import { ColorsKey } from '../../styles/theme';
import { colors } from '../../styles/theme/colors';

export const Container = styled.div`
  ${flex.column({ align: 'center', justify: 'center' })}
  width: 100vw;
  padding: 6vh;
`;

export const BrideGroomWrap = styled.div`
  ${grid({ align: 'center', gap: 50 })}
  width: 100%;
  margin-top: 10vh;
`;

export const Section = styled.section<{ color?: ColorsKey }>`
  width: 100%;
`;

export const Line = styled.span`
  display: block;
  height: 0.2px;
  margin: 1.5vh 0;
  background-color: ${colors.gray2};
`;

export const TitleBox = styled.div`
  ${flex({ align: 'end' })}
`;

export const Text = styled.p<{ color?: ColorsKey }>`
  color: ${(props) => (props.color ? colors[props.color] : colors.gray3)};
  font-size: small;
  letter-spacing: 1px;
`;

export const SubText = styled.p`
  color: ${colors.gray2};
  font-size: xx-small;
  letter-spacing: 3px;
`;

export const PhoneMailBox = styled.div`
  ${grid({ column: 3 })}
  margin: 3vh 0;
`;

export const IndexBox = styled.div`
  ${flex({ justify: 'start', align: 'center' })}
`;

export const NameBox = styled.div`
  ${flex.center()}
`;

export const LinkBox = styled.div`
  ${grid({ column: 2, justify: 'end' })}
`;
