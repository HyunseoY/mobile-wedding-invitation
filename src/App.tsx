import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  Account,
  Comments,
  Directions,
  EventDate,
  Footer,
  Gallery,
  Greeting,
  Information,
  Main
} from "./components";

import date from "./assets/date.png";
import wedding from "./assets/wedding.png";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handlePrintScreen = (e: KeyboardEvent) => {
      if (e.code === "PrintScreen") {
        e.preventDefault();
      }
    };

    const handleSourceView = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === "KeyU") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("keydown", handlePrintScreen);
    document.addEventListener("keydown", handleSourceView);

    // 이미지 로드
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.onload = resolve;
        image.onerror = reject;
      });
    };

    const images = [date, wedding];

    Promise.all(images.map((src) => loadImage(src)))
      .then(() => setLoaded(true))
      .catch((error) => console.log("Failed to load images", error));

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("keydown", handlePrintScreen);
      document.removeEventListener("keydown", handleSourceView);
    };
  }, []);

  // 이미지 로드 전에는 null 또는 로딩 스피너를 표시
  if (!loaded) {
    return null; // 또는 로딩 스피너를 표시
  }

  return (
    <>
      <Main />
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Greeting />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <EventDate />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Directions />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Information />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Account />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Gallery />
      </Fade>
      <Fade direction="up" triggerOnce={true} fraction={0.01}>
        <Comments />
      </Fade>
      <Footer />
    </>
  );
}

export default App;
