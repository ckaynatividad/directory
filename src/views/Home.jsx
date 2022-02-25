import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Home() {
  const { user } = useUser();
  return (
    <div className="Home">
      {user?.email ? (
        <Redirect to="/profile" />
      ) : (
        <>
          <h4>Huwwo</h4>
          <p>
            {' '}
            pwease <Link to="/login">sign in</Link>
          </p>
        </>
      )}
    </div>
  );
}
