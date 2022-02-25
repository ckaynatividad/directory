import { createContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { getProfile } from '../services/profiles';

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getProfile();
        setProfile(resp);
      } catch {
        <Redirect to="/profile/edit" />;
      }
    };
    fetchData();
  }, []);

  const value = { profile, setProfile };

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
