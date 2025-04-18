import { render, screen } from '@testing-library/react';
import { PhoneCard } from './PhoneCard';
import { MemoryRouter } from 'react-router-dom';

describe('PhoneCard', () => {
  const mockPhone = {
    id: '12345',
    name: 'iPhone 13',
    brand: 'Apple',
    image_url: 'http://example.com/iphone13.png',
    base_price: '999',
  };

  test('renders phone brand, name, and price correctly', () => {
    render(
      <MemoryRouter>
        <PhoneCard phone={mockPhone} />
      </MemoryRouter>
    );

    expect(screen.getByText('APPLE')).toBeInTheDocument();
    expect(screen.getByText('IPHONE 13')).toBeInTheDocument();
    expect(screen.getByText('999 EUR')).toBeInTheDocument();
  });

  test('renders phone image with correct alt text', () => {
    render(
      <MemoryRouter>
        <PhoneCard phone={mockPhone} />
      </MemoryRouter>
    );

    const image = screen.getByAltText(/iphone 13/i);
    expect(image).toBeInTheDocument();
  });

  test('renders phone image with correct alt text and src', () => {
    render(
      <MemoryRouter>
        <PhoneCard phone={mockPhone} />
      </MemoryRouter>
    );
  
    const image = screen.getByAltText(/iphone 13/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/iphone13.png');
  });
  
  test('renders fallback message if phone data is missing', () => {
    render(
      <MemoryRouter>
        <PhoneCard phone={null} />
      </MemoryRouter>
    );
  
    expect(screen.getByText(/phone not available/i)).toBeInTheDocument();
  });
  

  test('navigates to the correct product detail page when clicked', () => {
    render(
      <MemoryRouter>
        <PhoneCard phone={mockPhone} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/12345');
  });
});
