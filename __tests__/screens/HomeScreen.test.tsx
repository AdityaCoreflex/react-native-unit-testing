import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders welcome message', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Welcome to Home Screen')).toBeTruthy();
  });
});
