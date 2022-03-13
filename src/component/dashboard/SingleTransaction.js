import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import normalize from '../../common/utils/normalize';
import {Colors} from '../../common/colors';

const SingleTransaction = ({data}) => {
  const user = data.sender ? data.sender : data.receipient;
  const amount = data.amount;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.accountHolder}>{user.accountHolder}</Text>
        <Text style={styles.accountNo}>{user.accountNo}</Text>
      </View>
      <View>
        <Text color={data.sender ? 'green' : 'red'} style={styles.amount}>
          {data.sender ? '+ ' : '- '}
          {amount}
        </Text>
      </View>
    </View>
  );
};

export default SingleTransaction;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: normalize(8),
  },
  accountHolder: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  accountNo: {
    fontSize: normalize(12),
    color: Colors.gray,
  },
  amount: {
    fontWeight: 'bold',
  },
});
