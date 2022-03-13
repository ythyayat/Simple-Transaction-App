import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  ErrorMessage,
  ScreenContainer,
  TextInput,
} from '../../component';
import {commonStyle} from '../../common/styles';
import {useDispatch, useSelector} from 'react-redux';
import {actionBuilder} from '../../common/utils/actionBuilder';
import {LOGIN, SET_VALIDATION_CHECKED} from '../../redux/types';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.validation.isLoading);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginAction = () => {
    if (!username || !password) {
      dispatch(actionBuilder(SET_VALIDATION_CHECKED, true));
    } else {
      dispatch(actionBuilder(LOGIN, {username, password}));
    }
  };

  const registerAction = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    dispatch(actionBuilder(SET_VALIDATION_CHECKED, false));
  }, []);

  return (
    <ScreenContainer style={commonStyle.container} isLoading={isLoading}>
      <View style={commonStyle.contentSection}>
        <TextInput
          title="Username"
          onChangeText={e => setUsername(e)}
          value={username}
        />
        <TextInput
          title="Password"
          onChangeText={e => setPassword(e)}
          value={password}
          secureTextEntry
        />
        <ErrorMessage />
      </View>
      <View style={commonStyle.bottomSection}>
        <Button onPress={loginAction} title="LOGIN" />
        <Button onPress={registerAction} title="REGISTER" theme="light" />
      </View>
    </ScreenContainer>
  );
};

export default Login;
