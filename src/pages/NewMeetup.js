import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetUpData) {
    //sending user typed meetup informations to Google Firebase server.
    fetch(
      'https://udemy-nextjs-course-react-app2-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetUpData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      //redirect page to main page after submit new meetup form.
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
