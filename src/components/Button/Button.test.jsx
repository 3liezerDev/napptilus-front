// src/components/Button/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { vi } from 'vitest'; // usa esto si usas Vitest

describe('Button', () => {
  test('renders the label correctly', () => {
    render(<Button label="Aceptar" />);
    expect(screen.getByText('Aceptar')).toBeInTheDocument();
  });

  test('calls parentMethod when clicked', () => {
    const mockFn = vi.fn();
    render(<Button label="Click aquí" parentMethod={mockFn} />);
    fireEvent.click(screen.getByText('Click aquí'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('does not call parentMethod when disabled', () => {
    const mockFn = vi.fn();
    render(<Button label="No Click" parentMethod={mockFn} disabled />);
    fireEvent.click(screen.getByText('No Click'));
    expect(mockFn).not.toHaveBeenCalled();
  });

  test('adds the variant class when provided', () => {
    render(<Button label="Botón" variant="primary" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-button');
    expect(button).toHaveClass('primary');
  });
});
