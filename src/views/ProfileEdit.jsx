import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileForm2 from '../components/EditProfile';
import ProfileForm from '../components/ProfileForm';
import { useProfile } from '../hooks/useProfile';
import { useUser } from '../context/UserContext';
import { createProfile, getProfile, updateProfile } from '../services/profiles';

export default function ProfileEdit() {
  const [name, setName] = useState('');
  const {
    user: { email },
  } = useUser();
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({ name, email, bio, birthday });
      alert('Profile updated');
      history.push('/profile');
    } catch {
      alert('oops');
    }
  };

  return (
    <div>
      <ProfileForm2
        name={name}
        setName={setName}
        email={email}
        birthday={birthday}
        setBirthday={setBirthday}
        bio={bio}
        setBio={setBio}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
