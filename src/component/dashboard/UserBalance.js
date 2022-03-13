import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {useSelector} from 'react-redux';
import {Colors} from '../../common/colors';
import normalize from '../../common/utils/normalize';

const UserBalance = () => {
  const {username, accountNo} = useSelector(state => state.auth);
  const {balance} = useSelector(state => state.transaction);

  return (
    <View style={styles.container}>
      <Text style={styles.balanceTitle}>You have</Text>
      <Text style={styles.balance}>SGD {balance}</Text>
      <Text style={styles.accountTitle}>Account No</Text>
      <Text style={styles.accountData}>{accountNo}</Text>
      <Text style={styles.accountTitle}>Account Holder</Text>
      <Text style={styles.accountData}>{username}</Text>
    </View>
  );
};

export default UserBalance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: normalize(300),
    padding: normalize(20),
    borderBottomRightRadius: normalize(20),
    borderTopRightRadius: normalize(20),
    elevation: normalize(12),
  },
  balanceTitle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  balance: {
    fontSize: normalize(26),
    fontWeight: 'bold',
  },
  accountData: {
    fontWeight: 'bold',
  },
  accountTitle: {
    fontSize: normalize(12),
    color: Colors.gray,
  },
});
