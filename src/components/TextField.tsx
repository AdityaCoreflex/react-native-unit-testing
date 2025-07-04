import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

type Props = TextInputProps & {
  testID?: string;
};

const TextField: React.FC<Props> = ({
  testID = 'text-input',
  secureTextEntry = false,
  keyboardType = 'default',
  ...rest
}) => {
  return (
    <TextInput
      testID={testID}
      style={styles.input}
      placeholder="Enter text"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      {...rest}
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
});
