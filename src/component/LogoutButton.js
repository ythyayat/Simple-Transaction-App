import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from './Text';
import {useDispatch} from 'react-redux';
import {actionBuilder} from '../common/utils/actionBuilder';
import {CLEAR_USER_DATA} from '../redux/types';
import normalize from '../common/utils/normalize';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutAction = () => {
    dispatch(actionBuilder(CLEAR_USER_DATA));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => logoutAction()}>
        <View>
          <Text>logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  container: {
    padding: normalize(20),
    alignItems: 'flex-end',
  },
});
