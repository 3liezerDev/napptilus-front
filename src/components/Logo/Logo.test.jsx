import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';
import { MemoryRouter } from 'react-router-dom';

describe('Logo', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
  });

  test('renders the logo image with correct attributes', () => {
    const image = screen.getByAltText('Logo');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/mbst.svg');
    expect(image).toHaveClass('logo');
  });

  test('navigates to homepage when the logo is clicked', () => {
    const link = screen.getByRole('link', { name: /logo/i });
    expect(link).toHaveAttribute('href', '/');
  });
});
