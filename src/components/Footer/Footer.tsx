import { FlexCenter } from '../../styles/mixins';
import { Text } from '../common';
import * as Styled from './Footer.styles';

export const Footer = () => {
  return (
    <Styled.Container>
      <FlexCenter>
        <Text
          text="Copyrightⓒ2024. mogoe. All rights reserved."
          fontSize="12px"
          color="gray3"
        />
      </FlexCenter>
    </Styled.Container>
  );
};
