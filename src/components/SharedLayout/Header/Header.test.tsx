import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

it('logo link points to the root path', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const logo = screen.getByTestId('logo');
  const anchor = logo.closest('a');
  expect(anchor).toHaveAttribute('href', '/');
});
