import { createContext, useContext, useMemo, useState } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('user provider needed');
  }

  return context;
}
