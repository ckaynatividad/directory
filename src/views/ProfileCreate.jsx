import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import { ProfileProvider, useProfile } from '../context/ProfileContext';
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
  const test = getProfile();
  console.log(test);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProfile({ name, email, bio, birthday });
      alert('Profile created');
      <Redirect to="/profile" />;
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
