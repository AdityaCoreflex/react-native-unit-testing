// [Aditya - It refrences scenarios for rest api calls]

// Fetches data from a REST API on mount
// Shows a loader while fetching
// Displays data when it arrives
// Shows an error if the request fails
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const APIRefrenceScreen = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      setData(response.data.title);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text testID="title">APIRefrenceScreen</Text>
      {loading && <ActivityIndicator testID="loader" />}
      {data && <Text testID="data">{data}</Text>}
      {error && <Text testID="error">{error}</Text>}
      <Button testID="retry-button" title="Retry" onPress={fetchData} />
    </View>
  );
};

export default APIRefrenceScreen;

const styles = StyleSheet.create({});
