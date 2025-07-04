import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import TextField from '../components/TextField';
import Accordion from '../components/Accordian';
import ToggleSwitch from '../components/ToggleSwitch';
import Chip from '../components/Chip';
import Card from '../components/Card';
import ModalBox from '../components/Modal';

const UIReferenceScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [selectedChip, setSelectedChip] = useState<'A' | 'B' | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UI Reference</Text>

      {/* Button */}
      <TouchableOpacity
        testID="sample-button"
        style={styles.button}
        onPress={() => Alert.alert('Button Pressed')}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      <Button
        onPress={() => Alert.alert('Custom Button Pressed')}
        label="Click Me"
      />

      {/* Text Field */}
      <TextField placeholder="Email" keyboardType="email-address" />
      <TextField placeholder="Password" secureTextEntry />
      <TextField
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Type here..."
      />

      {/* Accordion */}
      <Accordion
        title="This is a sample accordion case?"
        content="This is sample content for accordion"
      />

      {/* Card */}
      <Card
        title="This is sample Card Title"
        content="This is a sample card content block."
      />

      {/* Modal Trigger */}
      <TouchableOpacity
        testID="open-modal"
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.title}>Open Modal</Text>
      </TouchableOpacity>

      <ModalBox visible={modalVisible} onClose={() => setModalVisible(false)} />

      {/* Switch */}
      <ToggleSwitch
        label="Enable Feature"
        value={isSwitchOn}
        onValueChange={setIsSwitchOn}
      />

      {/* Chips */}
      <View style={styles.chipContainer}>
        <Chip
          label="Chip A"
          selected={selectedChip === 'A'}
          onPress={() => setSelectedChip('A')}
          testID="chip-a"
        />
        <Chip
          label="Chip B"
          selected={selectedChip === 'B'}
          onPress={() => setSelectedChip('B')}
          testID="chip-b"
        />
      </View>
    </View>
  );
};

export default UIReferenceScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: '#FF9500',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  accordion: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
  },
  accordionTitle: {
    fontWeight: 'bold',
  },
  accordionContent: {
    marginTop: 8,
  },
  card: {
    backgroundColor: '#F2F2F2',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardContent: {
    color: '#444',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  chipContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  chip: {
    borderColor: '#007AFF',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipSelected: {
    backgroundColor: '#007AFF',
    color: '#fff',
  },
  chipText: {
    color: '#000',
  },
});
