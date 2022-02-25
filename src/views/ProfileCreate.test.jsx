import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { ProfileProvider } from '../hooks/useProfile';
import { UserProvider } from '../context/UserContext';
import Home from './Home';
import ProfileCreate from './ProfileCreate';

test('create render', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <ProfileCreate />
      </UserProvider>
    </MemoryRouter>
  );
  const text = screen.getByText(/you must create a profile!/i);
  expect(text).toBeInTheDocument();
});
