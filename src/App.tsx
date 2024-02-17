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

function App() {
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
