import React from 'react';
import './App.css'


const Header = () => {
  return (
    // <header>
    //   <nav>
    //     <ul>
    //       <li><a href="/">Home</a></li>
    //       <li><a href="/bugs">Bug Reports</a></li>
    //       <li><a href="/submit">Submit Bug</a></li>
    //     </ul>
    //   </nav>
    // </header>
    <div className="navbar">
      <div>
      </div>
      <nav className='home-navbar'>
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="/bug-bounty">Bug Reports</a>
        {/* <a href="submit">Submit</a> */}
        {/* <a href="#">Pricing</a> */}
      </nav>
      <button className="navbar-contactbtn">Contact us</button>
    </div>
  );
}

export default Header;
