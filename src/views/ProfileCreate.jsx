import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import { useProfile } from '../hooks/useProfile';
import { useUser } from '../context/UserContext';
import { createProfile, getProfile } from '../services/profiles';

export default function ProfileCreate() {
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
      await createProfile({ name, email, bio, birthday });
      alert('Profile created');
      history.push('/profile');
    } catch {
      alert('try again');
    }
  };

  return (
    <div>
      <h1>you must create a profile!</h1>
      <ProfileForm
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
