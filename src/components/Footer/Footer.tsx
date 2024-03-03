import { FlexCenter } from "../../styles/mixins";
import { KakaoShareButton } from "../KakaoShareButton";
import { Text } from "../common";
import * as Styled from "./Footer.styles";

export const Footer = () => {
  return (
    <Styled.Container>
      <FlexCenter>
        <KakaoShareButton />
        <Text text="Copyrightⓒ2024. MOGOE. All rights reserved." fontSize="12px" color="gray3" />
      </FlexCenter>
    </Styled.Container>
  );
};
