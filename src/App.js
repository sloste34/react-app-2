import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupPage from './pages/AllMeetup';
import FavoritePage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupPage />
        </Route>
        <Route path='/newMeetUp'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
