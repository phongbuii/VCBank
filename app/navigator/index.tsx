import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import navigationService from './navigationService';
import Home from '../../app/screens/Home';
const Stack = createStackNavigator();
const config = {
  animation: 'timing',
  config: {
    duration: 300,
    stiffness: 1000,
    damping: 300,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const options = {
  headerShown: false,
  header: false,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: config,
    close: config,
  },
};

const AppRouter = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        navigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
