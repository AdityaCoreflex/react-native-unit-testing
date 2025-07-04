import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

type ModalBoxProps = {
  visible: boolean;
  onClose: (e: GestureResponderEvent) => void;
  testID?: string;
};

const ModalBox: React.FC<ModalBoxProps> = ({
  visible,
  onClose,
  testID = 'modal',
}) => {
  return (
    <Modal
      testID={testID}
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContent}>
          <Text>This is a modal!</Text>
          <TouchableOpacity
            testID="close-modal"
            onPress={onClose}
            style={styles.modalButton}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalBox;

const styles = StyleSheet.create({
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
  modalButton: {
    backgroundColor: '#FF9500',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
  },
});
