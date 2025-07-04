import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Chip from '../../src/components/Chip';
describe('Chip Component', () => {
  it('renders with correct label', () => {
    const { getByText } = render(<Chip label="Test Chip" onPress={() => {}} />);
    expect(getByText('Test Chip')).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Chip label="Clickable Chip" onPress={onPressMock} testID="chip-click" />,
    );

    fireEvent.press(getByTestId('chip-click'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies selected styles when selected is true', () => {
    const { getByTestId } = render(
      <Chip
        label="Selected Chip"
        selected={true}
        onPress={() => {}}
        testID="chip-selected"
      />,
    );

    const chip = getByTestId('chip-selected');
    expect(chip.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: '#007AFF' }),
      ]),
    );
  });

  it('does not apply selected styles when selected is false', () => {
    const { getByTestId } = render(
      <Chip
        label="Unselected Chip"
        selected={false}
        onPress={() => {}}
        testID="chip-unselected"
      />,
    );

    const chip = getByTestId('chip-unselected');
    expect(chip.props.style).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: '#007AFF' }),
      ]),
    );
  });
});
