/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json'; 

import PushNotification from 'react-native-push-notification';

// Configure notification service
PushNotification.configure({
  // Configure notification handlers
  onNotification: function (notification) {
    console.log('Notification:', notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
}); 

AppRegistry.registerComponent(appName, () => App);
