import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../src/context/ThemeContext';
import ContextRefrenceScreen from '../../src/screens/ContextAPI_Integration';

const renderWithContext = (component: React.ReactElement) =>
  render(<ThemeProvider>{component}</ThemeProvider>);

describe('ThemeScreen Context', () => {
  it('toggles theme from light to dark', () => {
    const { getByTestId } = renderWithContext(<ContextRefrenceScreen />);

    expect(getByTestId('theme').props.children).toBe('light');

    fireEvent.press(getByTestId('toggle'));

    expect(getByTestId('theme').props.children).toBe('dark');
  });
});
