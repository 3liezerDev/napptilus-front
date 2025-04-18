import { render, screen, fireEvent } from '@testing-library/react';
import { BackButton } from './BackButton';
import { MemoryRouter, useNavigate } from 'react-router-dom'; 
import { vi } from 'vitest';

// Mock de react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(), // 👈 Aquí ya mockeamos useNavigate como vi.fn()
  };
});

describe('BackButton', () => {
  test('renders the back button with correct label', () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: /< back/i });
    expect(button).toBeInTheDocument();
  });

  test('navigates back when clicked', () => {
    const navigateMock = vi.fn();
    useNavigate.mockReturnValue(navigateMock); 

    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /< back/i });
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith(-1);
  });
});
