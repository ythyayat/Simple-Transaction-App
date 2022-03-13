import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from '../Text';

const Payee = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress && onPress()}>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Payee;

const styles = StyleSheet.create({});
