import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {SvgUri} from 'react-native-svg';

const Login = ({route, navigation}) => {
  //   console.log('Params: ', route.params);
  const login = route.params.login;
  const setLogin = route.params.setLogin;

  const styles = Styles;

  const clickHandler = () => {
    navigation.navigate('BottomTabs');
    setLogin(!login);
  };

  return (
    <View style={styles.body}>
      {/* <Text>Login</Text> */}
      {/* <Image src="../assets/images/Login.png"></Image> */}
      <SvgUri uri={'../assets/images/Login.svg'} width={'100%'} height={120} />
      <Button title="Login" onPress={() => clickHandler()} />
    </View>
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

export default Login;
