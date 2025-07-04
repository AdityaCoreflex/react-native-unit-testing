import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomHookRefrence from '../../src/screens/CustomHook_Integration';

describe('ToggleScreen', () => {
  it('toggles state from OFF to ON and back', () => {
    const { getByTestId } = render(<CustomHookRefrence />);

    const status = getByTestId('toggle-status');
    const button = getByTestId('toggle-button');

    // Initial state
    expect(status.props.children).toBe('OFF');

    // Toggle once
    fireEvent.press(button);
    expect(status.props.children).toBe('ON');

    // Toggle again
    fireEvent.press(button);
    expect(status.props.children).toBe('OFF');
  });
});
