export const useDirections = () => {
  const openNaverMap = (lat: number, lng: number): void => {
    const url = `https://map.naver.com/v5/directions/-/-/${lat},${lng},PLACE_POI/-/car`;
    window.open(url, '_blank');
  };

  const openTMap = (lat: number, lng: number): void => {
    const url = `https://tmap.co.kr/tmap_new/app/directionRouteResult.do?endX=${lng}&endY=${lat}`;
    window.open(url, '_blank');
  };

  const openKakaoNavi = (): void => {
    const url = 'kakaonavi://';
    const fallbackUrl = 'https://map.kakao.com/';
    window.location.href = url;

    const timer = setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 1000);

    window.onblur = () => {
      clearTimeout(timer);
    };
  };

  return { openNaverMap, openTMap, openKakaoNavi };
};
