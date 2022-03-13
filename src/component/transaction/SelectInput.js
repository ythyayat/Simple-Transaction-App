import {
  StyleSheet,
  View,
  TextInput as NativeTextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Text from '../Text';
import EyeButton from '../EyeButton';
import {Colors} from '../../common/colors';
import normalize from '../../common/utils/normalize';
import {useSelector} from 'react-redux';
import Payee from './Payee';

const SelectInput = ({title, options, onSelect}) => {
  const [selectedItem, setSelectedItem] = useState();
  const [isShow, setIsShow] = useState(false);
  const isChecked = useSelector(state => state.validation.validationChecked);
  const payees = useSelector(state => state.transaction.payees);
  console.log('value', options);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={() => setIsShow(!isShow)}>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>
            {selectedItem?.name || 'Select a Payee'}
          </Text>
          {/* <EyeButton isShow={isShow} /> */}
        </View>
      </TouchableOpacity>
      {isShow ? (
        <View>
          {payees.map((item, index) => (
            <Payee
              name={item.name}
              onPress={() => {
                setSelectedItem(item);
                onSelect && onSelect(item.accountNo);
                setIsShow(false);
              }}
              key={index}
            />
          ))}
        </View>
      ) : (
        <View>
          {isChecked && !selectedItem && (
            <Text color="red">{title} is required </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(12),
  },
  inputContainer: {
    paddingHorizontal: normalize(8),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(8),
  },
  textInput: {
    height: normalize(56),
    textAlignVertical: 'center',
    flex: 1,
    color: Colors.black,
  },
});
