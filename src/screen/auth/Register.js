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
import {
  REGISTER,
  SET_VALIDATION_CHECKED,
  SET_REGISTER_STATUS,
} from '../../redux/types';
import {clearErrorMessage} from '../../common/utils/errorMessageHandler';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoading, registrationStatus} = useSelector(
    state => state.validation,
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const loginAction = () => {
    if (!username || !password || password !== confirmPassword) {
      dispatch(actionBuilder(SET_VALIDATION_CHECKED, true));
    } else {
      dispatch(actionBuilder(REGISTER, {username, password}));
    }
  };

  useEffect(() => {
    if (registrationStatus) navigation.goBack();

    return () => {
      dispatch(actionBuilder(SET_REGISTER_STATUS, false));
    };
  }, [registrationStatus]);

  const clearValidation = () => {
    clearErrorMessage();
    dispatch(actionBuilder(SET_VALIDATION_CHECKED, false));
  };

  useEffect(() => {
    clearValidation();
    return () => {
      clearValidation();
    };
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
        <TextInput
          title="Confirm Password"
          onChangeText={e => setConfirmPassword(e)}
          value={confirmPassword}
          secureTextEntry
          equalWith={password}
        />

        <ErrorMessage />
      </View>
      <View style={commonStyle.bottomSection}>
        <Button onPress={loginAction} title="REGISTER" theme="light" />
      </View>
    </ScreenContainer>
  );
};

export default Register;
