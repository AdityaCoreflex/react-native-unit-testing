import React from 'react';
import { View, Text, Button } from 'react-native';
import { increment, decrement, reset } from '../reduxStore/slices/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const ReduxRefrenceScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <View>
      <Text testID="count">{count}</Text>
      <Button testID="inc" title="+" onPress={() => dispatch(increment())} />
      <Button testID="dec" title="-" onPress={() => dispatch(decrement())} />
      <Button testID="reset" title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

export default ReduxRefrenceScreen;
