import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function ProfileForm({
  name,
  setName,
  birthday,
  setBirthday,
  bio,
  setBio,
  handleSubmit,
}) {
  const { user } = useUser();
  return (
    <form>
      <label> name </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>email</label>
      <input type="email" name="email" value={user.email} readOnly />
      <label> date</label>
      <input
        type="date"
        name="birthday"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <label>bio</label>
      <textarea
        type="text"
        name="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
