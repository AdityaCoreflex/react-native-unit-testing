import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import axios from 'axios';
import APIRefrenceScreen from '../../src/screens/RestAPI_Integration';

jest.mock('axios');

describe('APIRefrenceScreen', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it('renders loading indicator, then data', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { title: 'Test Title' },
    });

    const { getByTestId, queryByTestId } = render(<APIRefrenceScreen />);

    expect(getByTestId('loader')).toBeTruthy();

    await waitFor(
      () => {
        expect(queryByTestId('loader')).toBeNull();
        expect(getByTestId('data').props.children).toBe('Test Title');
      },
      { timeout: 10000 },
    );
  });

  it('renders error message on failure', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const { getByTestId } = render(<APIRefrenceScreen />);

    await waitFor(() => {
      expect(getByTestId('error').props.children).toBe('Failed to fetch data');
    });
  });

  it('retries API call on button press', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Initial fail'));
    mockedAxios.get.mockResolvedValueOnce({ data: { title: 'Retry Success' } });

    const { getByTestId, queryByTestId } = render(<APIRefrenceScreen />);

    await waitFor(() => {
      expect(getByTestId('error')).toBeTruthy();
    });

    fireEvent.press(getByTestId('retry-button'));

    await waitFor(() => {
      expect(queryByTestId('error')).toBeNull();
      expect(getByTestId('data').props.children).toBe('Retry Success');
    });
  });
});
