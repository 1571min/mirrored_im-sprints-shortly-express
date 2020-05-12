import React from 'react';
import './Input.css';

const Input = ({
  emailValue,
  usernameValue,
  passwordValue,
  onEmailChange,
  onUsernameChange,
  onPasswordChange,
}) => {
  return (
    <div className="input">
      <div>
        <label> Username </label>
        <input value={usernameValue} onChange={onUsernameChange} />
      </div>
      <div>
        <label> Email </label>
        <input value={emailValue} onChange={onEmailChange} />
      </div>
      <div>
        <label> password </label>
        <input
          value={passwordValue}
          onChange={onPasswordChange}
          type="password"
        />
      </div>
    </div>
  );
};

export default Input;
