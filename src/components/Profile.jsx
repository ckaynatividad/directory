import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile(props) {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/profile/edit');
  };
  return (
    <div>
      Profile <button onClick={handleSubmit}>edit</button>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Birthday: {props.birthday}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}
