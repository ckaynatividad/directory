import { createContext, useEffect, useMemo, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { getProfile } from '../services/profiles';

export function useProfile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile()
      .then((data) => setProfile(data))
      .finally(() => setLoading(false));
  }, []);

  return { profile, setProfile, loading, setLoading };
}
