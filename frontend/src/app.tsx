import React, { useEffect } from 'react';
import DynamicTabNavigator from './navigation/DynamicTabNavigator';
import { Notification, Notifications } from 'react-native-notifications';
import { StoreProvider } from './hooks/useStore';

const App = () => {
  // 注册推送器
  useEffect(() => {
    Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
      completion({ alert: false, sound: false, badge: false });
    });

    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      completion();
    });
  }, []);

  return (
    <StoreProvider>
      <DynamicTabNavigator />
    </StoreProvider>
  );
};

export default App;
