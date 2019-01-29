import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import ProjectTable from './project_table/project_table';
import ProjectsList from './projects_list';
import 'tachyons';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <ProjectTable />
        <ProjectsList />
      </div>
    );
  }
}

export default App;
