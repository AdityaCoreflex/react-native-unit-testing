// __tests__/ToggleSwitch.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ToggleSwitch from '../../src/components/ToggleSwitch';

describe('ToggleSwitch Component', () => {
  it('renders with correct label and initial value', () => {
    const { getByText, getByTestId } = render(
      <ToggleSwitch label="My Switch" value={false} onValueChange={() => {}} />,
    );

    expect(getByText('My Switch')).toBeTruthy();
    expect(getByTestId('toggle-switch').props.value).toBe(false);
  });

  it('calls onValueChange when toggled', () => {
    const onToggle = jest.fn();
    const { getByTestId } = render(
      <ToggleSwitch
        label="Test Toggle"
        value={false}
        onValueChange={onToggle}
      />,
    );

    fireEvent(getByTestId('toggle-switch'), 'valueChange', true);
    expect(onToggle).toHaveBeenCalledWith(true);
  });

  it('renders correct value when true', () => {
    const { getByTestId } = render(
      <ToggleSwitch value={true} onValueChange={() => {}} />,
    );

    expect(getByTestId('toggle-switch').props.value).toBe(true);
  });

  it('supports custom testID', () => {
    const { getByTestId } = render(
      <ToggleSwitch
        value={false}
        onValueChange={() => {}}
        testID="custom-switch"
      />,
    );

    expect(getByTestId('custom-switch')).toBeTruthy();
    expect(getByTestId('custom-switch-wrapper')).toBeTruthy();
  });
});
