import { createContext, useEffect, useMemo, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { getProfile } from '../services/profiles';

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    try {
      const fetchData = () => {
        getProfile().then((data) => setProfile(data));
      };
      fetchData();
      setLoading(false);
    } catch {
      alert('error catching data');
    }
  }, []);

  const value = useMemo(
    () => ({ profile, setProfile, loading, setLoading }),
    [profile]
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('profileprovider needed');
  }

  return context;
};
