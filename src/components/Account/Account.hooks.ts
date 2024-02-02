import { message } from 'antd';
import { useState } from 'react';

export const useAccount = () => {
  const [groomDropdown, setGroomDropdown] = useState(false);
  const [brideDropdown, setBrideDropdown] = useState(false);

  const handleGroomDropdownChange = () => {
    setGroomDropdown(!groomDropdown);
  };

  const handleBrideDropdownChange = () => {
    setBrideDropdown(!brideDropdown);
  };

  const groomHandleCopy = async () => {
    try {
      await navigator.clipboard.writeText('신한은행 110-123-456789');
      message.info('계좌번호가 복사되었습니다.');
    } catch (err) {
      message.error('이 브라우저에서는 지원하지 않습니다.');
    }
  };

  const brideHandleCopy = async () => {
    try {
      await navigator.clipboard.writeText('신한은행 110-123-456789');
      message.info('계좌번호가 복사되었습니다.');
    } catch (err) {
      message.error('이 브라우저에서는 지원하지 않습니다.');
    }
  };

  return {
    groomDropdown,
    brideDropdown,
    setGroomDropdown,
    setBrideDropdown,
    handleGroomDropdownChange,
    handleBrideDropdownChange,
    groomHandleCopy,
    brideHandleCopy,
  };
};
