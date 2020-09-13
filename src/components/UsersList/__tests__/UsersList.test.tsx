import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UsersList from '../index';

const fetch = global.fetch;

beforeEach(() => {
  cleanup();
  fetch.resetMocks();
});

test('Display message for empty list', async () => {
  const { findByText } = render(<UsersList users={[]} />);
  expect(await findByText(/There are no users :\(/)).toBeInTheDocument();
});

test('Display list of users', async () => {
  const users = [
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
  ];
  const { findByText } = render(<UsersList users={users} />);
  expect(await findByText(/@jayu/)).toBeInTheDocument();
  expect(await findByText(/@jonny/)).toBeInTheDocument();
});
