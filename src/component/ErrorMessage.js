import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Text from './Text';
import {Colors} from '../common/colors';
import normalize from '../common/utils/normalize';

const ErrorMessage = () => {
  const errorMessage = useSelector(state => state.validation.errorMessage);
  return (
    <View>
      {!!errorMessage && (
        <View style={styles.messageContainer}>
          <Text color="red">{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  messageContainer: {
    borderWidth: 1,
    borderColor: Colors.red,
    borderRadius: normalize(12),
    padding: normalize(16),
  },
});
