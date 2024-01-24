import {
  Account,
  Comments,
  Directions,
  EventDate,
  Gallery,
  Greeting,
  Information,
  Main,
} from './components';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <>
      <Main />
      <Greeting />
      <Contact />
      <EventDate />
      <Directions />
      <Information />
      <Account />
      <Gallery />
      <Comments />
    </>
  );
}

export default App;
