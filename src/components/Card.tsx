import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CardProps = {
  title: string;
  content: string;
  testID?: string;
};

const Card: React.FC<CardProps> = ({ title, content, testID = 'card' }) => {
  return (
    <View testID={testID} style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F2F2F2',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 14,
    color: '#444',
  },
});
