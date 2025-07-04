import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../src/reduxStore/slices/counterSlice';
import ReduxRefrenceScreen from '../../src/screens/Redux_Integration';

const renderWithRedux = (component: React.ReactElement) => {
  const store = configureStore({ reducer: { counter: counterReducer } });
  return render(<Provider store={store}>{component}</Provider>);
};

describe('CounterScreen Redux', () => {
  it('increments, decrements, and resets the counter', () => {
    const { getByTestId } = renderWithRedux(<ReduxRefrenceScreen />);

    fireEvent.press(getByTestId('inc'));
    expect(getByTestId('count').props.children).toBe(1);

    fireEvent.press(getByTestId('dec'));
    expect(getByTestId('count').props.children).toBe(0);

    fireEvent.press(getByTestId('inc'));
    fireEvent.press(getByTestId('inc'));
    fireEvent.press(getByTestId('reset'));
    expect(getByTestId('count').props.children).toBe(0);
  });
});
