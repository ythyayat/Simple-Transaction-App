import {Text as NativeText} from 'react-native';
import React from 'react';
import {Colors} from '../common/colors';

const Text = ({children, color, style}) => {
  const TextColor = Colors[color] || Colors.black;

  return (
    <NativeText style={[{color: TextColor}, style]}>{children}</NativeText>
  );
};

export default Text;
