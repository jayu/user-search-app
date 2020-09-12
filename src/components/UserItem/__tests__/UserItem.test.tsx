import React from 'react';
import { render } from '@testing-library/react';
import snapshotDiff from 'snapshot-diff';
import UserItem from '../index';

test('It should render User information', () => {
  const { getByText } = render(<UserItem name="Jakub" username="jayu" />);

  const name = getByText(/Jakub/);
  const username = getByText(/@jayu/);

  expect(name).toBeInTheDocument();
  expect(username).toBeInTheDocument();
});

test('It should assert difference between two UserItems', () => {
  expect(
    snapshotDiff(<UserItem name="Jakub" username="jayu" />, <UserItem name="Mathew" username="math" />),
  ).toMatchSnapshot();
});
