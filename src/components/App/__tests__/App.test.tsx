import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import App from '../index';

const fetch = global.fetch;

test('Display app header', async () => {
  const { findByText } = render(<App />);
  expect(await findByText(/Users List/)).toBeInTheDocument();
});

test('Display list of users', async () => {
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
  const { findByText } = render(<App />);
  expect(await findByText(/John Smith/)).toBeInTheDocument();
  expect(await findByText(/@jayu/)).toBeInTheDocument();
});

test('Filter list by input text', async () => {
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
  const { findByText, findByPlaceholderText, queryByText } = render(<App />);
  const input = await findByPlaceholderText(/search user/i);

  act(() => {
    fireEvent.change(input, { target: { value: 'John' } });
  });

  expect(await findByText(/John Smith/)).toBeInTheDocument();
  expect(await queryByText(/Jay Smith/)).toBeNull();
});

test('Show empty list message for non existing search value', async () => {
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
  const { findByText, findByPlaceholderText } = render(<App />);
  const input = await findByPlaceholderText(/search user/i);

  act(() => {
    fireEvent.change(input, { target: { value: 'Mathew' } });
  });

  expect(await findByText(/There are no users/i)).toBeInTheDocument();
});

test('Display message on fetch error', async () => {
  fetch.mockReject(new Error('Internal server error'));
  const { findByText } = render(<App />);
  expect(await findByText(/Users fetch error/)).toBeInTheDocument();
});
