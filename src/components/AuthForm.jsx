import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  errorMsg,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <p>{errorMsg}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
