import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import user from './user.png';
import './top-nav.css'

export default function() {
  return (
    <div className="top-nav">
      <img className="top-nav-logo" alt="talentwire" src={logo} />
      <Link className=" top-nav-title" to='/'>TalentWire</Link>
      <Link className=" top-nav-link" to='/talent'>Talent</Link>
      <Link className=" top-nav-link" to='/skills'>Skills</Link>
      <Link className="top-nav-user-image" to='/user'>
        <img className="top-nav-user-image" alt="user image" src={user} />
      </Link>
    </div>
  );
}
