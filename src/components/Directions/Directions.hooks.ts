export const useDirections = () => {
  // const openNaverMap = (lat: number, lng: number): void => {
  //   const url = `https://map.naver.com/v5/directions/-/-/${lat},${lng},PLACE_POI/-/car`;
  //   window.open(url, '_blank');
  // };

  // const openTMap = (lat: number, lng: number): void => {
  //   const url = `https://tmap.co.kr/tmap_new/app/directionRouteResult.do?endX=${lng}&endY=${lat}`;
  //   window.open(url, '_blank');
  // };

  // const openKakaoNavi = (): void => {
  //   const url = 'kakaonavi://';
  //   const fallbackUrl = 'https://map.kakao.com/';
  //   window.location.href = url;

  //   const timer = setTimeout(() => {
  //     window.location.href = fallbackUrl;
  //   }, 1000);

  //   window.onblur = () => {
  //     clearTimeout(timer);
  //   };
  // };

  const lat = 37.5665;
  const lng = 126.978;

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
    const url = `nmap://route/public?dlat=${lat}&dlng=${lng}&dname=목적지&appname=com.example.myapp`;
    openApp(url, 'https://map.naver.com/');
  };

  const openTmap = () => {
    const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=목적지`;
    openApp(url, 'https://tmap.co.kr/');
  };

  const openKakaoNavi = () => {
    const url = `kakaonavi://route?ep=${lat},${lng}&ename=목적지`;
    openApp(url, 'https://kakaonavi.net/');
  };

  return { openNaverMap, openTmap, openKakaoNavi };
};
