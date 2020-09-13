import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import SearchInput from '../index';

test('Handles input change', async () => {
  const handler = jest.fn();

  const { findByPlaceholderText } = render(<SearchInput onValueChange={handler} placeholder="search user" />);
  const input = await findByPlaceholderText(/search user/i);

  act(() => {
    fireEvent.change(input, { target: { value: 'John' } });
  });

  expect(handler).toBeCalledWith('John');
});
