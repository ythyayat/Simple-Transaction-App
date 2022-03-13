import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {commonStyle} from '../common/styles';
import {Colors} from '../common/colors';
import normalize from '../common/utils/normalize';

const ScreenContainer = ({children, isLoading}) => {
  return (
    <View style={commonStyle.container}>
      {children}
      {!!isLoading && (
        <View style={commonStyle.loading}>
          <ActivityIndicator size={normalize(62)} color={Colors.white} />
        </View>
      )}
    </View>
  );
};

export default ScreenContainer;
