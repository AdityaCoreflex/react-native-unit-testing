import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../../src/components/Card';

describe('Card Component', () => {
  it('renders the card with given title and content', () => {
    const { getByText } = render(
      <Card title="Sample Title" content="Sample Content" />,
    );

    expect(getByText('Sample Title')).toBeTruthy();
    expect(getByText('Sample Content')).toBeTruthy();
  });

  it('applies proper styles and testID', () => {
    const { getByTestId } = render(
      <Card title="Test" content="Testing" testID="custom-card" />,
    );

    const card = getByTestId('custom-card');
    expect(card).toBeTruthy();
  });
});
