import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Profile from '../components/Profile';
import { getProfile } from '../services/profiles';

export default function ProfileView() {
  const [profile, setProfile] = useState({});
  const history = useHistory();

  useEffect(() => {
    try {
      fetchData = () => {
        getProfile().then((data) => setProfile(data));
        fetchData();
      };
    } catch {
      history.push('/profile/edit');
    }
  }, [{}]);
  return (
    <div>
      <p>helllo</p>
    </div>
  );
}
