/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import ButtonContainer from './components/ButtonContainer';
import Button from './components/Button';
import {REACT_APP_AUTH_DOMAIN, REACT_APP_AUTH_CLIENT_ID} from '@env';
import { Form, FormLabel, FormValue, Page } from './components';


const LoginButton = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
      try {
          await authorize();
      } catch (e) {
          console.log(e);
      }
  };

  return <Button onPress={onPress} text="Log in" color="#24C2CB" />
}

const LogoutButton = () => {
  const {clearSession} = useAuth0();

  const onPress = async () => {
      try {
          await clearSession();
      } catch (e) {
          console.log(e);
      }
  };

  return <Button onPress={onPress} text="Log out" color="#EF525B" />
}

const Profile = () => {
  const {user} = useAuth0();
  console.log(user)
  return (
    <Form>
      {user &&
        <>
          <FormLabel>Logged In</FormLabel>
          <FormValue>{user.name}</FormValue>
        </>
      }
      {!user && 
        <>
          <FormLabel>Not Logged In</FormLabel>
        </>}
    </Form>
  )
}

const ButtonGroup = () => {
  const {user} = useAuth0();
  console.log(user)
  return (
    <ButtonContainer>
      {!user && <LoginButton />}
      {user && <LogoutButton />}
    </ButtonContainer>
  )
}

function App(): React.JSX.Element {
  const {user} = useAuth0()
  console.log("here", user)
  return (
    <Auth0Provider domain={REACT_APP_AUTH_DOMAIN} clientId={REACT_APP_AUTH_CLIENT_ID}>
      <>
        <Page>
          <Profile />
          <ButtonGroup />
        </Page>
      </>
    </Auth0Provider>
  );
}

export default App;
