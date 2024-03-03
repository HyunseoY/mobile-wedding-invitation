import { useState } from "react";
import { FlexCenter } from "../../styles/mixins";
import { KakaoShareButton } from "../KakaoShareButton";
import { Text } from "../common";
import * as Styled from "./Footer.styles";

export const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <Styled.Container>
      <FlexCenter>
        {showButton && <KakaoShareButton />}
        <Text text="Copyrightⓒ2024. MOGOE. All rights reserved." fontSize="12px" color="gray3" />
      </FlexCenter>
    </Styled.Container>
  );
};
