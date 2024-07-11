import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

const Navigation = () => {
  const [login, setLogin] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!login ? 'login' : 'BottomTabs'}>
        <Stack.Screen
          name="login"
          component={Login}
          initialParams={{login, setLogin}}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Styles = StyleSheet.create({
  body: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation;
