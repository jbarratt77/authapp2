import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Auth0Provider} from 'react-native-auth0';
import {REACT_APP_AUTH_DOMAIN, REACT_APP_AUTH_CLIENT_ID} from '@env';

const WrappedApp = () => {
  return (
    <Auth0Provider
      domain={REACT_APP_AUTH_DOMAIN}
      clientId={REACT_APP_AUTH_CLIENT_ID}>
      <App />
    </Auth0Provider>
  );
};

AppRegistry.registerComponent(appName, () => WrappedApp);
