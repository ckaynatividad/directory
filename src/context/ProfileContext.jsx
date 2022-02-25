import { createContext, useEffect, useMemo, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { getProfile } from '../services/profiles';

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = () => {
      getProfile().then((data) => setProfile(data));
    };
    fetchData();
  }, []);

  const value = useMemo(() => ({ profile, setProfile }), [profile]);

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
