import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="appBar">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="primaryHdg">Employees Tracker</h1>
      </header>
    );
  }
}

export default Header;