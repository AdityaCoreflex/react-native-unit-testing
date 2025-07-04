import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextField from '../../src/components/TextField';

describe('TextField Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<TextField />);
    expect(getByTestId('text-input')).toBeTruthy();
  });

  it('renders with custom placeholder', () => {
    const { getByPlaceholderText } = render(<TextField placeholder="Email" />);
    expect(getByPlaceholderText('Email')).toBeTruthy();
  });

  it('captures user input correctly', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<TextField onChangeText={mockFn} />);
    fireEvent.changeText(getByTestId('text-input'), 'Hello');
    expect(mockFn).toHaveBeenCalledWith('Hello');
  });

  it('displays initial value', () => {
    const { getByDisplayValue } = render(<TextField value="Default" />);
    expect(getByDisplayValue('Default')).toBeTruthy();
  });

  it('uses email-address keyboard type', () => {
    const { getByTestId } = render(<TextField keyboardType="email-address" />);
    expect(getByTestId('text-input').props.keyboardType).toBe('email-address');
  });

  it('uses secureTextEntry for password', () => {
    const { getByTestId } = render(<TextField secureTextEntry />);
    expect(getByTestId('text-input').props.secureTextEntry).toBe(true);
  });
});
