import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../src/screens/LoginScreen';

const mockNavigate = jest.fn();
const mockPush = jest.fn();
const setup = () =>
  render(<LoginScreen navigation={{ navigate: mockNavigate }} />);

describe('LoginScreen', () => {
  // Functional and UI testing

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
    const { getByPlaceholderText, getByLabelText } = render(
      <LoginScreen navigation={{ navigate: mockPush }} />,
    );
    fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), '123456');
    fireEvent.press(getByLabelText('login-button'));

    expect(mockPush).toHaveBeenCalledWith('Home');
  });

  // Snapshot test cases

  it('matches snapshot (default state)', () => {
    const tree = render(<LoginScreen navigation={{ push: mockPush }} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('matches snapshot after entering valid credentials', () => {
    const { getByLabelText, toJSON } = render(
      <LoginScreen navigation={{ push: mockPush }} />,
    );

    fireEvent.changeText(getByLabelText('email-input'), 'test@example.com');
    fireEvent.changeText(getByLabelText('password-input'), '123456');

    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot when showing error message', () => {
    const { getByLabelText, toJSON, getByText } = render(
      <LoginScreen navigation={{ push: mockPush }} />,
    );

    fireEvent.changeText(getByLabelText('email-input'), 'wrong@example.com');
    fireEvent.changeText(getByLabelText('password-input'), 'wrongpass');
    fireEvent.press(getByLabelText('login-button'));

    expect(getByText('Invalid credentials')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot after pressing Theme button', () => {
    const { getByLabelText, toJSON } = render(
      <LoginScreen navigation={{ push: mockPush }} />,
    );

    fireEvent.press(getByLabelText('theme-button'));
    expect(mockPush).toHaveBeenCalledWith('theme');
    expect(toJSON()).toMatchSnapshot();
  });
});
