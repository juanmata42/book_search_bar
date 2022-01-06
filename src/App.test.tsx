import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe('App', () => {

test('renders search bar in english', () => {
  render(<App />);
  //mock function to change language
  const searchBar = screen.getByPlaceholderText(/Search/i);
  expect(searchBar).toBeInTheDocument();
});
});
