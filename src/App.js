import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FilterBar from "./components/FilterBar";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    search: ""
  };

  editSearch = (event) => {
    this.setState({search: event.target.value});
  }

  filter = () => {
   return this.state.employees.filter(employee => employee.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  render() {
    return (
      <div>
      <Title>Employees List</Title>
      <FilterBar search={this.state.search} edit={this.editSearch}/>
      <Wrapper>
        {this.filter().map(employee => (
          <EmployeeCard
            name={employee.name}
            occupation={employee.occupation}
            age={employee.age}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
