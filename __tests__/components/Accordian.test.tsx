import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Accordion from '../../src/components/Accordian';

describe('Accordion Component', () => {
  const props = {
    title: 'Sample Accordion',
    content: 'This is hidden content.',
    testID: 'accordion',
  };

  it('renders accordion header with title', () => {
    const { getByText } = render(<Accordion {...props} />);
    expect(getByText('Sample Accordion')).toBeTruthy();
  });

  it('does not show content initially', () => {
    const { queryByTestId } = render(<Accordion {...props} />);
    expect(queryByTestId('accordion-content')).toBeNull();
  });

  it('shows content on toggle press', () => {
    const { getByTestId, getByText } = render(<Accordion {...props} />);
    fireEvent.press(getByTestId('accordion-toggle'));
    expect(getByText('This is hidden content.')).toBeTruthy();
  });

  it('hides content again when toggled twice', () => {
    const { getByTestId, queryByTestId } = render(<Accordion {...props} />);
    fireEvent.press(getByTestId('accordion-toggle'));
    expect(queryByTestId('accordion-content')).toBeTruthy();

    fireEvent.press(getByTestId('accordion-toggle'));
    expect(queryByTestId('accordion-content')).toBeNull();
  });

  it('handles multiple accordion instances independently', () => {
    const { getByTestId, queryByTestId } = render(
      <>
        <Accordion title="Acc 1" content="Content 1" testID="acc1" />
        <Accordion title="Acc 2" content="Content 2" testID="acc2" />
      </>,
    );

    fireEvent.press(getByTestId('acc1-toggle'));
    expect(queryByTestId('acc1-content')).toBeTruthy();
    expect(queryByTestId('acc2-content')).toBeNull();

    fireEvent.press(getByTestId('acc2-toggle'));
    expect(queryByTestId('acc1-content')).toBeTruthy();
    expect(queryByTestId('acc2-content')).toBeTruthy();
  });
  it('matches snapshot (initially closed)', () => {
    const { toJSON } = render(<Accordion {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot after opening content', () => {
    const { getByTestId, toJSON } = render(<Accordion {...props} />);
    fireEvent.press(getByTestId('accordion-toggle'));
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot after toggling open and closed', () => {
    const { getByTestId, toJSON } = render(<Accordion {...props} />);
    fireEvent.press(getByTestId('accordion-toggle'));
    fireEvent.press(getByTestId('accordion-toggle'));
    expect(toJSON()).toMatchSnapshot();
  });
});
