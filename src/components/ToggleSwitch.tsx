import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

type ToggleSwitchProps = {
  label?: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  testID?: string;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label = 'Toggle',
  value,
  onValueChange,
  testID = 'toggle-switch',
}) => {
  return (
    <View style={styles.container} testID={`${testID}-wrapper`}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        testID={testID}
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#ccc', true: '#007AFF' }}
        thumbColor={value ? '#fff' : '#888'}
      />
    </View>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});
