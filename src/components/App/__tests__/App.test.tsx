import React from 'react';
import { render } from '@testing-library/react';
import App from '../index';

test('renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/users list/i);
  expect(linkElement).toBeInTheDocument();
});
