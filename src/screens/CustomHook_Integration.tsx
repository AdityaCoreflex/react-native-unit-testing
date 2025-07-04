import React from 'react';
import { View, Text, Button } from 'react-native';
import useToggle from '../customHooks/useToggle';

const CustomHookRefrence = () => {
  const [isOn, toggle] = useToggle();

  return (
    <View>
      <Text testID="toggle-status">{isOn ? 'ON' : 'OFF'}</Text>
      <Button testID="toggle-button" title="Toggle" onPress={toggle} />
    </View>
  );
};

export default CustomHookRefrence;
