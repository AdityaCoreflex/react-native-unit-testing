import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../../src/components/Button';

describe('Button Component', () => {
  it('renders with default label', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('sample-button');
    expect(button).toBeTruthy();
  });

  it('renders with custom label', () => {
    const { getByText } = render(<Button label="Submit" />);
    expect(getByText('Submit')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<Button onPress={mockFn} />);
    fireEvent.press(getByTestId('sample-button'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it('default snapshot testing', () => {
    const tree = render(<Button />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('matches snapshot after clicking', () => {
    const mockFn = jest.fn();
    const { getByTestId, toJSON } = render(<Button onPress={mockFn} />);
    fireEvent.press(getByTestId('sample-button'));
    expect(toJSON()).toMatchSnapshot();
  });
});
