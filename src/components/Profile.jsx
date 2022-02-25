import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile(profile) {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/profile/edit');
  };
  return (
    <div>
      Profile <button onClick={handleSubmit}>edit</button>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}
