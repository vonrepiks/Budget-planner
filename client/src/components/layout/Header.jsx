import React from 'react';
import { Link } from 'react-router-dom';

const handleClick = (e) => {
  const elements = document.getElementsByClassName('nav-link');
  Array.from(elements).forEach((element) => {
    element.classList.remove('active');
  });

  if (e) {
    e.currentTarget.classList.add('active');
  }
};

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link className="nav-link" to="monthly" onClick={handleClick}>Monthly Balance</Link>
              <Link className="nav-link" to="yearly" onClick={handleClick}>Yearly Balance</Link>
              <a className="nav-link" href="logout">Logout</a>
              <Link className="nav-link active" to="login" onClick={handleClick}>Login</Link>
              <Link className="nav-link" to="register" onClick={handleClick}>Register</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
