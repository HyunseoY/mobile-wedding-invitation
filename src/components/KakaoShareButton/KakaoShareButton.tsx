import { useEffect } from "react";

export const KakaoShareButton = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
      window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }

    // SDK 초기화 여부를 판단합니다.
    console.log(window.Kakao.isInitialized());
  }, []);

  const kakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "라희♡지현의 결혼식에 초대합니다",
        description: "헤리움 웨딩홀, 2024년 5월 25일 11시",
        imageUrl:
          "https://github.com/HyunseoY/mobile-wedding-invitation/blob/main/src/assets/thumbnail.png?raw=true",
        link: {
          mobileWebUrl: "https://lahee-wedding-invitation.vercel.app/",
          webUrl: "https://lahee-wedding-invitation.vercel.app/"
        }
      },
      buttons: [
        {
          title: "모바일청첩장 바로가기",
          link: {
            mobileWebUrl: "https://lahee-wedding-invitation.vercel.app/",
            webUrl: "https://lahee-wedding-invitation.vercel.app/"
          }
        }
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true
    });
  };

  return (
    <button onClick={kakaoShare}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        alt="share-btn"
      />
    </button>
  );
};
