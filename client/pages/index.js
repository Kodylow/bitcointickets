import buildClient from '../api/build-client';
import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>Signed in</h1> : <h1>Not Signed in</h1>;

  //Jobs
  //Job1
  {
    currentUser ? <button>Apply</button> : null;
  }
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;
