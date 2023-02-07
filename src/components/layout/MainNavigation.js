import { Link } from 'react-router-dom';
import myStyles from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={myStyles.header}>
      <div className={myStyles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/newMeetup'>Add New Meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorite Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
