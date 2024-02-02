import { message } from 'antd';

export const useTransportation = () => {
  const lat = 35.151477;
  const lng = 129.061116;

  const openApp = (url: string, fallback: string) => {
    message.info('앱 미설치 시 길 안내가 실행되지 않을 수 있습니다');

    let testLink = document.createElement('a');
    testLink.href = url;
    document.body.appendChild(testLink);
    testLink.click();

    setTimeout(function () {
      if (!document.hidden) {
        window.location.href = fallback;
      }
    }, 2000);
  };

  const openNaverMap = () => {
    const url = `nmap://route/car?dlat=${lat}&dlng=${lng}&dname=헤리움웨딩홀&appname=com.example.myapp`;
    openApp(url, 'https://map.naver.com/');
  };

  const openTmap = () => {
    const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=헤리움웨딩홀`;
    openApp(url, 'https://tmap.co.kr/');
  };

  const openKakaoMap = () => {
    const url = `kakaomap://route?ep=${lat},${lng}&by=CAR`;
    openApp(url, `https://map.kakao.com/link/to/헤리움웨딩홀,${lat},${lng}`);
  };

  return { openNaverMap, openTmap, openKakaoMap };
};
