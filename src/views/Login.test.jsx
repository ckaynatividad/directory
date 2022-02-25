import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Profile from '../components/Profile';
import { UserProvider } from '../context/UserContext';
import Home from './Home';
import Login from './Login';
jest.mock('../context/UserContext');
test('login render', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <Login />
      </UserProvider>
    </MemoryRouter>
  );
  const login = screen.getByText(/Login/i);
  expect(login).toBeInTheDocument();
});

test('sign up button works', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <Login />
      </UserProvider>
    </MemoryRouter>
  );
  const signup = screen.getByRole('button', { name: /Sign Up/i });
  userEvent.click(signup);

  expect(screen.getByRole('heading', { name: /Sign Up/i })).toBeInTheDocument();
});

test('login works', () => {
  const { container } = render(
    <UserProvider mockUser={{ id: 1, email: 'natividad.ckay@gmail.com' }}>
      <MemoryRouter initialEntries={['/login']}>
        <Login />
      </MemoryRouter>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
