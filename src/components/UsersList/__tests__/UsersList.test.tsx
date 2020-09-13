import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UsersList from '../index';

const fetch = global.fetch;

beforeEach(() => {
  cleanup();
  fetch.resetMocks();
});

test('Displays message on fetch error', async () => {
  fetch.mockReject(new Error('Internal server error'));
  const { findByText } = render(<UsersList />);
  expect(await findByText(/Users fetch error/)).toBeInTheDocument();
});

test('Displays message for empty list', async () => {
  fetch.mockResponse(JSON.stringify([]));
  const { findByText } = render(<UsersList />);
  expect(await findByText(/There are no users :\(/)).toBeInTheDocument();
});

test('Displays list of users', async () => {
  fetch.mockResponse(
    JSON.stringify([
      {
        id: 0,
        name: 'John Smith',
        username: 'jonny',
      },
      {
        id: 1,
        name: 'Jay Smith',
        username: 'jayu',
      },
    ]),
  );
  const { findByText } = render(<UsersList />);
  expect(await findByText(/@jayu/)).toBeInTheDocument();
  expect(await findByText(/@jonny/)).toBeInTheDocument();
});
