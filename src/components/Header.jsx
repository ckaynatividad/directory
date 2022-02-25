import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/users';

export default function Header() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    await signOutUser();
    setUser({});
  };
  return (
    <div>
      {user.email ? (
        <>
          <h1>hi {user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}
