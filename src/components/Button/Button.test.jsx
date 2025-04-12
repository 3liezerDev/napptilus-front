// src/components/Button/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { vi } from 'vitest'; // usa esto si usas Vitest

describe('Button', () => {
  test('muestra el label correctamente', () => {
    render(<Button label="Aceptar" />);
    expect(screen.getByText('Aceptar')).toBeInTheDocument();
  });

  test('llama a parentMethod cuando se hace click', () => {
    const mockFn = vi.fn();
    render(<Button label="Click aquí" parentMethod={mockFn} />);
    fireEvent.click(screen.getByText('Click aquí'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('no llama a parentMethod si está deshabilitado', () => {
    const mockFn = vi.fn();
    render(<Button label="No Click" parentMethod={mockFn} disabled />);
    fireEvent.click(screen.getByText('No Click'));
    expect(mockFn).not.toHaveBeenCalled();
  });

  test('agrega clase de variante si se proporciona', () => {
    render(<Button label="Botón" variant="primary" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-button');
    expect(button).toHaveClass('primary');
  });
});
