import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from './Text';
import normalize from '../common/utils/normalize';

const EyeButton = ({isShow, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(!isShow)} style={styles.container}>
      {isShow ? <Text>hide</Text> : <Text>show</Text>}
    </TouchableOpacity>
  );
};

export default EyeButton;

const styles = StyleSheet.create({
  container: {
    paddingLeft: normalize(8),
    width: normalize(52),
    alignItems: 'center',
  },
});
