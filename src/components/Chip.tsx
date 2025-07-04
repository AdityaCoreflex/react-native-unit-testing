import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ChipProps = {
  label: string;
  selected?: boolean;
  onPress: () => void;
  testID?: string;
};

const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onPress,
  testID = 'chip',
}) => {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    borderColor: '#007AFF',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  chipSelected: {
    backgroundColor: '#007AFF',
  },
  chipText: {
    color: '#000',
  },
  chipTextSelected: {
    color: '#fff',
  },
});
