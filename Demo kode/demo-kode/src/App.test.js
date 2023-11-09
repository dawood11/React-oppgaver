import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Endre navn/i);
  expect(linkElement).toBeInTheDocument();
});

test('if increment reaches 2', () => {
  render(<App />);
  let counter = 0;
  expect(counter).toBeGreaterThan(2);
  counter++;
  expect(counter).toBeGreaterThan(2);
  counter++;
  expect(counter).toBeGreaterThan(2);
  counter++;
  expect(counter).toBeGreaterThan(2);
});
