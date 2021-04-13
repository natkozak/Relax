import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-bar-credentials">
      <div className="nav-bar-greeting">Signed in as {currentUser.fullName}</div>
      <button onClick={logout} className="nav-bar-logout">Sign out of Relax</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/createnew">Sign Up</Link>
      <Link className="btn" to="/signin">Log In</Link>
    </div>
  );

  return (
    <div className="nav-bar-header">
      <div className="nav-bar-div">
        {display}
      </div>
    </div>
  );
};

export default SearchBar;