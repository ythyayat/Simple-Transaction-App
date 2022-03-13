import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../common/colors';
import Text from '../Text';
import SingleTransaction from './SingleTransaction';
import normalize from '../../common/utils/normalize';

const TransactionCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Text>{data.date}</Text>
      {data.data.map((item, index) => (
        <SingleTransaction data={item} key={index} />
      ))}
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginBottom: normalize(20),
    padding: normalize(20),
    borderRadius: normalize(20),
    elevation: normalize(4),
    marginHorizontal: normalize(20),
  },
});
