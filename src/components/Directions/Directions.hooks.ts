export const useDirections = () => {
  const lat = 35.151477;
  const lng = 129.061116;

  const openApp = (url: string, fallback: string) => {
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
    const url = `nmap://route/public?dlat=${lat}&dlng=${lng}&dname=헤리움웨딩홀&appname=com.example.myapp`;
    openApp(url, 'https://map.naver.com/');
  };

  const openTmap = () => {
    const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=헤리움웨딩홀`;
    openApp(url, 'https://tmap.co.kr/');
  };

  const openKakaoNavi = () => {
    const url = `kakaonavi://look?p=${lat},${lng}`;
    openApp(url, 'https://kakaonavi.net/');
  };

  return { openNaverMap, openTmap, openKakaoNavi };
};
