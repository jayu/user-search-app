import React from 'react';
import { render } from '@testing-library/react';
import App from '../index';

test('Display app header', async () => {
  const { findByText } = render(<App />);
  expect(await findByText(/Users List/)).toBeInTheDocument();
});
