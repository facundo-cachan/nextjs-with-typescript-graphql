import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderWithRouter from 'mocks/renderWithRouter';

import About from 'pages/about';

describe('About page', () => {
  test('Exist link & router loaded?', () => {
    render(<About />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Welcome/ig)).toBeInTheDocument();
  });
  test('Rendered page', () => {
    renderWithRouter(<About />, { route: '/about' });
    expect(screen.getByText(/Welcome/ig)).toBeInTheDocument();
  });
})
