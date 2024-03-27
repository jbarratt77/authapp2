/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {useAuth0} from 'react-native-auth0';
import ButtonContainer from '../../components/ButtonContainer';
import Button from '../../components/Button';
import { Form, FormLabel, FormValue, Page } from '../../components';


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
  const {user, getCredentials} = useAuth0();
  console.log("user", user)
  useEffect(() => {
    const getCreds = async () => {
      const data = await getCredentials();
      return data;
    }

    getCreds().then(creds => console.log("creds", creds)).catch(console.error)
  }, [user])
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
  // console.log(user)
  return (
    <ButtonContainer>
      {!user && <LoginButton />}
      {user && <LogoutButton />}
    </ButtonContainer>
  )
}

function Main(): React.JSX.Element {
  return (
      <Page>
        <Profile />
        <ButtonGroup />
      </Page>
  );
}

export default Main;
