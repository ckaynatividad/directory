import { createContext, useEffect, useMemo, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const [profile, setProfile] = useState({});
  console.log(loading);
  console.log('context', profile);
  useEffect(() => {
    setLoading(true);
    getProfile()
      .then((data) => setProfile(data))
      .finally(() => setLoading(false));
  }, [user?.id]);

  // const value = useMemo(
  //   () => ({ profile, setProfile, loading, setLoading }),
  //   [profile]
  // );
  const value = { profile, setProfile, loading, setLoading };

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
