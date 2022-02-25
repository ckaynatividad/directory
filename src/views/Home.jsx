import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Home() {
  const { user } = useUser();
  return (
    <div className="Home">
      {user.id && <Redirect to="/profile" />}

      {!user.id && (
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
