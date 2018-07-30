import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ProjectTable from './Components/ProjectTable/ProjectTable';
import ProjectsList from './Components/ProjectsList/ProjectsList';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <ProjectTable />
        <ProjectsList />
        {/*<Footer />
        <Register />
        <Signin />
        <CreateProject />*/}
      </div>
    );
  }
}

export default App;
