import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import Profile from '../components/Profile';
import { useProfile } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';
import { getProfile } from '../services/profiles';

export default function ProfileView() {
  const { profile, loading } = useProfile();
  console.log(profile.name);

  return (
    <div>
      Profile
      {loading && <h1>LOADING</h1>}
      {!loading && (
        <>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Birthday: {profile.birthday}</p>
          <p>Bio: {profile.bio}</p>
          <Link to="/profile/edit">edit</Link>
        </>
      )}
    </div>
  );
}
