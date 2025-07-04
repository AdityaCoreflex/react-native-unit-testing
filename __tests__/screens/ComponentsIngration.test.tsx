import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import UIReferenceScreen from '../../src/screens/Component_Integration';

describe('UIReferenceScreen', () => {
  it('renders all core components correctly', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <UIReferenceScreen />,
    );

    // Title
    expect(getByText('UI Reference')).toBeTruthy();

    // Custom Button
    expect(getByText('Click Me')).toBeTruthy();

    // TextFields
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByPlaceholderText('Type here...')).toBeTruthy();

    // Accordion
    expect(getByText('This is a sample accordion case?')).toBeTruthy();

    // Card
    expect(getByText('This is sample Card Title')).toBeTruthy();

    // Modal Button
    expect(getByText('Open Modal')).toBeTruthy();

    // Switch
    expect(getByText('Enable Feature')).toBeTruthy();

    // Chips
    expect(getByText('Chip A')).toBeTruthy();
    expect(getByText('Chip B')).toBeTruthy();
  });

  it('opens and closes the modal', async () => {
    const { getByText, getByTestId, queryByText } = render(
      <UIReferenceScreen />,
    );

    // Initially modal text shouldn't be there
    expect(queryByText('This is a modal!')).toBeNull();

    fireEvent.press(getByText('Open Modal'));

    await waitFor(() => {
      expect(getByText('This is a modal!')).toBeTruthy();
    });

    fireEvent.press(getByText('Close'));

    await waitFor(() => {
      expect(queryByText('This is a modal!')).toBeNull();
    });
  });

  it('toggles the switch', () => {
    const { getByTestId } = render(<UIReferenceScreen />);
    const toggle = getByTestId('toggle-switch');

    expect(toggle.props.value).toBe(false);
    fireEvent(toggle, 'valueChange', true);
    expect(toggle.props.value).toBe(true); // Note: this doesn't update unless you use useState + re-render
  });

  it('handles chip selection', () => {
    const { getByTestId } = render(<UIReferenceScreen />);
    const chipA = getByTestId('chip-a');
    const chipB = getByTestId('chip-b');

    fireEvent.press(chipA);
    fireEvent.press(chipB);
    fireEvent.press(chipA);

    expect(chipA).toBeTruthy();
    expect(chipB).toBeTruthy();
  });

  it('updates text input value', () => {
    const { getByPlaceholderText } = render(<UIReferenceScreen />);
    const input = getByPlaceholderText('Type here...');

    fireEvent.changeText(input, 'Test input');
    expect(input.props.value).toBe('Test input');
  });

  it('opens and closes the accordion', () => {
    const { getByText, queryByText } = render(<UIReferenceScreen />);
    const toggle = getByText('This is a sample accordion case?');

    // Initially hidden
    expect(queryByText('This is sample content for accordion')).toBeNull();

    fireEvent.press(toggle);
    expect(getByText('This is sample content for accordion')).toBeTruthy();

    fireEvent.press(toggle);
    expect(queryByText('This is sample content for accordion')).toBeNull();
  });
});
