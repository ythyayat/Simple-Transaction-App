import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  Button,
  LogoutButton,
  ScreenContainer,
  Transactions,
  UserBalance,
} from '../../component';
import {commonStyle} from '../../common/styles';
import {useDispatch} from 'react-redux';
import {actionBuilder} from '../../common/utils/actionBuilder';
import {GET_BALANCE, GET_TRANSACTIONS} from '../../redux/types';

const Dasboard = ({navigation}) => {
  const dispatch = useDispatch();

  const goToTransaction = () => {
    navigation.navigate('Transfer');
  };

  const getData = () => {
    dispatch(actionBuilder(GET_BALANCE));
    dispatch(actionBuilder(GET_TRANSACTIONS));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScreenContainer>
      <LogoutButton />
      <UserBalance />
      <Transactions />
      <View style={commonStyle.bottomSection}>
        <Button title="Make Transfer" onPress={goToTransaction} />
      </View>
    </ScreenContainer>
  );
};

export default Dasboard;

const styles = StyleSheet.create({});
