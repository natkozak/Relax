import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.fullName}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/createnew">Sign Up</Link>
      <Link className="btn" to="/signin">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  );
};

export default SearchBar;