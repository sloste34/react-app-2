import { Route } from 'react-router-dom';

import AllMeetupPage from './pages/AllMeetup';
import FavoritePage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Route path='/'>
        <AllMeetupPage />
      </Route>
      <Route path='/newMeetUp'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritePage />
      </Route>
    </div>
  );
}

export default App;
