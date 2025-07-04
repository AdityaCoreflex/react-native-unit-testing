import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ContextRefrenceScreen = () => {
  const { theme, toggle } = useTheme();

  return (
    <View>
      <Text testID="theme">{theme}</Text>
      <Button testID="toggle" title="Toggle" onPress={toggle} />
    </View>
  );
};

export default ContextRefrenceScreen;
