import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../src/screens/LoginScreen';

const mockNavigate = jest.fn();
const setup = () =>
  render(<LoginScreen navigation={{ navigate: mockNavigate }} />);

describe('LoginScreen', () => {
  it('renders all input fields and button', () => {
    const { getByPlaceholderText, getByLabelText } = setup();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByLabelText('login-button')).toBeTruthy();
  });

  it('shows error on invalid credentials', () => {
    const { getByPlaceholderText, getByLabelText, getByText } = setup();

    fireEvent.changeText(getByPlaceholderText('Email'), 'wrong@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'wrongpass');
    fireEvent.press(getByLabelText('login-button'));
    expect(getByText('Invalid credentials')).toBeTruthy();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('navigates to Home on valid credentials', () => {
    const { getByPlaceholderText, getByLabelText } = setup();

    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), '123456');
    fireEvent.press(getByLabelText('login-button'));

    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });
});
