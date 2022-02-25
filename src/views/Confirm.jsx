import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirm() {
  return (
    <div>
      <p>nice, please check email to confirm account</p>

      <Link to="/login">I did</Link>
    </div>
  );
}
