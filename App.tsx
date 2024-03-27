import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import {REACT_APP_AUTH_DOMAIN, REACT_APP_AUTH_CLIENT_ID} from '@env';
import Main from './components/section/Main';

function App(): React.JSX.Element {
  return (
    <Auth0Provider
      domain={REACT_APP_AUTH_DOMAIN}
      clientId={REACT_APP_AUTH_CLIENT_ID}>
      <Main />
    </Auth0Provider>
  );
}

export default App;
