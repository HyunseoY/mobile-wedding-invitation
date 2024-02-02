import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, FlexColumn } from '../../styles/mixins';
import { colors } from '../../styles/theme/colors';
import { Text, Title } from '../common';
import { useAccount } from './Account.hooks';
import * as Styled from './Account.styles';

export const Account = () => {
  const app = useAccount();

  return (
    <Styled.Container>
      <Title subTitle="ACCOUNT" title="마음 전하실 곳" />
      <FlexColumn align="center" marginTop={35} gap={10}>
        <Text text="참석이 어려우신 분들을 위해" />
        <Text text="계좌번호를 기재하였습니다" />
        <Text text="너그러운 마음으로 양해 부탁드립니다" />

        <Styled.ButtonBox>
          <Styled.DropButton onClick={app.handleGroomDropdownChange}>
            신랑 계좌번호
            <Styled.IconWrapper dropdownVisible={app.groomDropdown}>
              <FontAwesomeIcon icon={faAngleDown} color={colors.gray6} />
            </Styled.IconWrapper>
          </Styled.DropButton>

          {app.groomDropdown && (
            <Styled.DropDownMenu
              onClick={(e) => e.stopPropagation()}
              className={app.groomDropdown ? 'open' : ''}
            >
              <Flex align="center" justify="between">
                <FlexColumn gap={10}>
                  <Text fontSize="12px" text="신한은행 110-123-456789" />
                  <Text fontSize="12px" text="최지현" />
                </FlexColumn>
                <Styled.CopyButton onClick={app.brideHandleCopy}>
                  복사하기
                </Styled.CopyButton>
              </Flex>
            </Styled.DropDownMenu>
          )}

          <Styled.DropButton onClick={app.handleBrideDropdownChange}>
            신부 계좌번호
            <Styled.IconWrapper dropdownVisible={app.brideDropdown}>
              <FontAwesomeIcon icon={faAngleDown} color={colors.gray6} />
            </Styled.IconWrapper>
          </Styled.DropButton>

          {app.brideDropdown && (
            <Styled.DropDownMenu
              onClick={(e) => e.stopPropagation()}
              className={app.brideDropdown ? 'open' : ''}
            >
              <Flex align="center" justify="between">
                <FlexColumn gap={10}>
                  <Text fontSize="12px" text="신한은행 110-123-456789" />
                  <Text fontSize="12px" text="정라희" />
                </FlexColumn>
                <Styled.CopyButton onClick={app.brideHandleCopy}>
                  복사하기
                </Styled.CopyButton>
              </Flex>
            </Styled.DropDownMenu>
          )}
        </Styled.ButtonBox>
      </FlexColumn>
    </Styled.Container>
  );
};
