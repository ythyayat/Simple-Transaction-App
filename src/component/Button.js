import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from './Text';
import {Colors} from '../common/colors';
import normalize from '../common/utils/normalize';

const Button = ({title, onPress, theme = 'dark'}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: theme === 'light' ? Colors.white : Colors.black},
        ]}>
        <Text
          color={theme === 'light' ? 'black' : 'white'}
          style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: normalize(280),
    height: normalize(46),
    borderRadius: normalize(23),
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(10),
  },
  title: {
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
});
