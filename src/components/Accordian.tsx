import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type AccordionProps = {
  title: string;
  content: string;
  testID?: string;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  testID = 'accordion',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View testID={testID}>
      <TouchableOpacity
        testID={`${testID}-toggle`}
        style={styles.header}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View testID={`${testID}-content`}>
          <Text style={styles.content}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  header: {
    padding: 12,
    backgroundColor: '#EEE',
    borderRadius: 6,
    marginVertical: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    padding: 12,
    backgroundColor: '#F5F5F5',
    fontSize: 14,
    borderRadius: 6,
  },
});
