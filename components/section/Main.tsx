import React, {useEffect, useState} from 'react';
import {useAuth0} from 'react-native-auth0';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function Main(): React.JSX.Element {
  const {user, hasValidCredentials} = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const check = async () => {
      const isLoggedIn = await hasValidCredentials();
      return isLoggedIn;
    };
    check().then(setIsLoggedIn).catch(console.error);
  }, [user]);
  return isLoggedIn ? <LoggedIn /> : <LoggedOut />;
}

export default Main;
