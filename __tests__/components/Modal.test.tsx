import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ModalBox from '../../src/components/Modal';

describe('ModalBox Component', () => {
  it('renders modal when visible is true', () => {
    const { getByTestId } = render(
      <ModalBox visible={true} onClose={() => {}} />,
    );
    expect(getByTestId('modal')).toBeTruthy();
  });

  it('calls onClose when close button is pressed', () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <ModalBox visible={true} onClose={onCloseMock} />,
    );

    fireEvent.press(getByTestId('close-modal'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not crash when hidden (visible = false)', () => {
    const { queryByTestId } = render(
      <ModalBox visible={false} onClose={() => {}} />,
    );
    expect(queryByTestId('modal')).toBeNull();
  });
});
