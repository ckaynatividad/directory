import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { ProfileProvider } from '../hooks/useProfile';
import { UserProvider } from '../context/UserContext';
import Home from './Home';

test('home render', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <Home />
      </UserProvider>
    </MemoryRouter>
  );
  const huwwo = screen.getByText(/Huwwo/i);
  expect(huwwo).toBeInTheDocument();
});

test('click sign in for login', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const signin = screen.getByRole('link');
  userEvent.click(signin);

  const login = await screen.findByText(/Login/i);

  expect(login).toBeInTheDocument();
});
