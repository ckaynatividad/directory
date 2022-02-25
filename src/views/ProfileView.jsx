import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Profile from '../components/Profile';
import { useProfile } from '../context/ProfileContext';
import { getProfile } from '../services/profiles';

export default function ProfileView() {
  const { profile } = useProfile();
  const history = useHistory();

  return (
    <div>
      Profile
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
      <Link to="/profile/edit">edit</Link>
    </div>
  );
}
