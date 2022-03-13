import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from './Text';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../common/colors';
import normalize from '../common/utils/normalize';
import {commonStyle} from '../common/styles';
import {useSelector} from 'react-redux';

const Header = ({title, leftButton}) => {
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.validation.isLoading);
  return (
    <View>
      <View style={styles.container}>
        {leftButton && (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text>back</Text>
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {!!isLoading && <View style={commonStyle.loading} />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    paddingHorizontal: normalize(20),
    height: normalize(100),
    paddingVertical: normalize(18),
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
});
