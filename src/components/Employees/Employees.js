import React, { Component } from 'react';
import styles from './Employees.module.css';

class Employees extends Component {
  state = {
    newEmployeeForm: {
      firstName: '',
      lastName: '',
      salary: '',
    },
    employeesList: [
      // {
      //   firstName: 'Myron',
      //   lastName: 'Schippers',
      //   salary: '20000',
      // },
      // {
      //   firstName: 'Scott',
      //   lastName: 'Brozmander',
      //   salary: '20000',
      // }
    ],
  }

  handleInputChange(event, inputKey) {
    this.setState({
      newEmployeeForm: {
        ...this.state.newEmployeeForm,
        [inputKey]: event.target.value,
      }
    });
  }

  handleSubmitEmployee = (event) => {
    event.preventDefault();

    console.log('Employee to be Saved: ', this.state.newEmployeeForm);
    this.setState({
      employeesList: [
        ...this.state.employeesList,
        this.state.newEmployeeForm, // entered employee
      ]
    });
  }

  render() {
    const displayedEmployees = this.state.employeesList.map((item, index) => {
      // an item in the array
      return (
        <div key={index}>
          <h4>{item.firstName} {item.lastName}</h4>
          <p>Salary: ${item.salary}</p>
        </div>
      );
    });

    return (
      <div>
        <h2>Employees</h2>

        <form onSubmit={this.handleSubmitEmployee} className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="kittyKat">First Name:</label>
            <input
              id="kittyKat"
              type="text"
              placeholder="Employee's First Name"
              onChange={(event) => this.handleInputChange(event, 'firstName')}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              type="text"
              placeholder="Employee's Last Name"
              onChange={(event) => this.handleInputChange(event, 'lastName')}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="salary">Salary:</label>
            <input
              id="salary"
              type="text"
              placeholder="Employee's Salary"
              onChange={(event) => this.handleInputChange(event, 'salary')}
            />
          </div>
          <button>SAVE</button>
        </form>

        <div className={styles.list}>
          {/* SHOW LIST OF EMPLOYEES HERE */}
          {displayedEmployees}
        </div>
      </div>
    );
  }
}

export default Employees;