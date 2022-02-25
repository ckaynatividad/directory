import React, { useState } from 'react';

export default function ProfileForm() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  };
  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        name="birthday"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <input
        type="text"
        name="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
