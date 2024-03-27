import React from 'react';
import {useAuth0} from 'react-native-auth0';
import ButtonContainer from '../../components/ButtonContainer';
import Button from '../../components/Button';
import {Form, FormLabel, Page} from '../../components';

const LoginButton = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} text="Log in" color="#24C2CB" />;
};

function LoggedOut(): React.JSX.Element {
  return (
    <Page>
      <Form>
        <FormLabel>Logged Out</FormLabel>
        <FormLabel>Please Log In</FormLabel>
      </Form>
      <ButtonContainer>
        <LoginButton />
      </ButtonContainer>
    </Page>
  );
}

export default LoggedOut;
