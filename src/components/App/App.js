import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Employees from '../Employees/Employees';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Employees />
        </div>
      </div>
    );
  }
}

export default App;
