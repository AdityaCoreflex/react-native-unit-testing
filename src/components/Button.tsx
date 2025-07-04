// components/Button.tsx
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  onPress?: () => void;
  label?: string;
};

const Button = ({ onPress, label = 'Press Me' }: ButtonProps) => {
  return (
    <TouchableOpacity
      testID="sample-button"
      style={styles.button}
      onPress={onPress || (() => Alert.alert('Button Pressed'))}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
