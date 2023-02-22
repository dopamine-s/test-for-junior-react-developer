import ForumSpeakers from '../ForumSpeakers/ForumSpeakers';
import ForumTopic from '../ForumTopic/ForumTopic';
import RootLayout from '../RootLayout/RootLayout';

function App() {
  return (
    <RootLayout>
      <ForumTopic />
      <ForumSpeakers />
    </RootLayout>
  );
}

export default App;
