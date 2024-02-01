import {
  Account,
  Comments,
  Directions,
  EventDate,
  Greeting,
  Main,
} from './components';

function App() {
  return (
    <>
      <Main />
      <Greeting />
      <EventDate />
      <Directions />
      {/* <Information /> */}
      <Account />
      {/* <Gallery /> */}
      <Comments />
    </>
  );
}

export default App;
