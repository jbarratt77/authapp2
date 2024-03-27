import React, {useEffect, useState} from 'react';
import {useAuth0} from 'react-native-auth0';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function Main(): React.JSX.Element {
  const {user, hasValidCredentials, getCredentials} = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const check = async () => {
      const isLoggedIn = await hasValidCredentials();
      setIsLoggedIn(isLoggedIn);
      return isLoggedIn;
    };
    const refresh = async () => {
      const credentials = await getCredentials();
      return credentials;
    }
    check().then(refresh).catch(console.error);
  }, [user]);
  return isLoggedIn ? <LoggedIn /> : <LoggedOut />;
}

export default Main;
