import {StyleSheet, View, TextInput as NativeTextInput} from 'react-native';
import React, {useState} from 'react';
import Text from './Text';
import EyeButton from './EyeButton';
import {Colors} from '../common/colors';
import normalize from '../common/utils/normalize';
import {useSelector} from 'react-redux';

const TextInput = ({
  title,
  value = '',
  onChangeText,
  secureTextEntry,
  equalWith,
  numberOfLines,
  keyboardType,
}) => {
  const [isShow, setIsShow] = useState(false);
  const isChecked = useSelector(state => state.validation.validationChecked);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.inputContainer}>
        <NativeTextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.textInput]}
          secureTextEntry={secureTextEntry && !isShow}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
        />
        {secureTextEntry && (
          <EyeButton isShow={isShow} onPress={e => setIsShow(e)} />
        )}
      </View>
      <View>
        {isChecked && !value && <Text color="red">{title} is required </Text>}
        {!!equalWith && equalWith !== value && (
          <Text color="red">{title} not match </Text>
        )}
      </View>
    </View>
  );
};

export default TextInput;

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
    textAlignVertical: 'top',
    flex: 1,
    color: Colors.black,
  },
});
