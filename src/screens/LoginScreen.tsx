import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';

const VALID_CREDENTIALS = { email: 'test@example.com', password: '123456' };

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (
      email === VALID_CREDENTIALS.email &&
      password === VALID_CREDENTIALS.password
    ) {
      navigation.navigate('Home');
    } else {
      setError('Invalid credentials');
    }
  };
  const handleTheme = () => {
    navigation.push('theme');
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        accessibilityLabel="email-input"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        accessibilityLabel="password-input"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Button
        title="Login"
        onPress={handleLogin}
        accessibilityLabel="login-button"
      />
      <Button
        title="Theme"
        onPress={handleTheme}
        accessibilityLabel="theme-button"
      />
      <Button
        title="API Refrence"
        onPress={() => navigation.push('APIRefrenceScreen')}
        accessibilityLabel="api-refrence-button"
      />
      <Button
        title="Redux Refrence"
        onPress={() => navigation.push('ReduxRefrenceScreen')}
        accessibilityLabel="redux-refrence-button"
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 4 },
  error: { color: 'red', marginVertical: 4 },
});
