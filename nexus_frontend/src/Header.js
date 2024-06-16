import React from 'react';
import './App.css'


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/bugs">Bug Reports</a></li>
          <li><a href="/submit">Submit Bug</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
