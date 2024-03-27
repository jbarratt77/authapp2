import React from 'react';
import {useAuth0} from 'react-native-auth0';
import ButtonContainer from '../../components/ButtonContainer';
import Button from '../../components/Button';
import {Form, FormLabel, FormValue, Page} from '../../components';

const LogoutButton = () => {
  const {clearSession} = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} text="Log out" color="#EF525B" />;
};

const Profile = () => {
  const {user} = useAuth0();
  return (
    <Form>
      <FormLabel>Logged In</FormLabel>
      {user && <FormValue>{user.name}</FormValue>}
    </Form>
  );
};

function LoggedIn(): React.JSX.Element {
  return (
    <Page>
      <Profile />
      <ButtonContainer>
        <LogoutButton />
      </ButtonContainer>
    </Page>
  );
}

export default LoggedIn;
