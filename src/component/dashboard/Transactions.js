import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {useSelector} from 'react-redux';
import TransactionCard from './TransactionCard';
import {commonStyle} from '../../common/styles';
import normalize from '../../common/utils/normalize';

const Transactions = () => {
  const transactions = useSelector(state => state.transaction.transactions);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your transaction history</Text>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TransactionCard data={item} />}
        keyExtractor={(item, index) => toString(item) + index}
      />
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  title: {
    paddingTop: normalize(20),
    paddingHorizontal: normalize(20),
    paddingBottom: normalize(8),
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
});
