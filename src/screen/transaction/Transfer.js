import {ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  ErrorMessage,
  ScreenContainer,
  SelectInput,
  TextInput,
} from '../../component';
import {commonStyle} from '../../common/styles';
import {useDispatch, useSelector} from 'react-redux';
import {actionBuilder} from '../../common/utils/actionBuilder';
import {
  GET_BALANCE,
  GET_PAYEES,
  GET_TRANSACTIONS,
  MAKE_TRANSFER,
  SET_TRANSACTION_STATUS,
  SET_VALIDATION_CHECKED,
} from '../../redux/types';
import {clearErrorMessage} from '../../common/utils/errorMessageHandler';

const Transfer = ({navigation}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.validation.isLoading);
  const transactionStatus = useSelector(
    state => state.transaction.transactionStatus,
  );
  const [amount, setAmount] = useState('');
  const [receipientAccountNo, setReceipientAccountNo] = useState('');
  const [description, setDescription] = useState('');

  const transferAction = () => {
    if (!amount || !receipientAccountNo) {
      dispatch(actionBuilder(SET_VALIDATION_CHECKED, true));
    } else {
      dispatch(
        actionBuilder(MAKE_TRANSFER, {
          amount: parseInt(amount) || 0,
          description,
          receipientAccountNo,
        }),
      );
    }
  };

  useEffect(() => {
    if (transactionStatus) navigation.goBack();

    return () => {
      dispatch(actionBuilder(SET_TRANSACTION_STATUS, false));
    };
  }, [transactionStatus]);

  const getData = () => {
    dispatch(actionBuilder(GET_BALANCE));
    dispatch(actionBuilder(GET_TRANSACTIONS));
  };

  const clearValidation = () => {
    clearErrorMessage();
    dispatch(actionBuilder(SET_VALIDATION_CHECKED, false));
  };

  useEffect(() => {
    clearValidation();
    dispatch(actionBuilder(GET_PAYEES));
    return () => {
      clearValidation();
      getData();
    };
  }, []);

  return (
    <ScreenContainer style={commonStyle.container} isLoading={isLoading}>
      <View style={commonStyle.contentSection}>
        <ScrollView>
          <SelectInput
            title="Payee"
            onSelect={e => setReceipientAccountNo(e)}
          />
          <TextInput
            title="Amount"
            onChangeText={e => e.match('^[0-9]*$') && setAmount(e)}
            value={amount}
            keyboardType="number-pad"
          />
          <TextInput
            title="Description"
            onChangeText={e => setDescription(e)}
            value={description}
            numberOfLines={6}
          />
          <ErrorMessage />
        </ScrollView>
      </View>
      <View style={commonStyle.bottomSection}>
        <Button onPress={transferAction} title="Transfer Now" />
      </View>
    </ScreenContainer>
  );
};

export default Transfer;
