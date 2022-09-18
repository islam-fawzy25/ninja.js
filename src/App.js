import React, { Component } from 'react';
import DataTable from './client/containers/DataTable/index.container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <DataTable rows={this.props.rows} locale="da" rowsPerPage={5} />
      </div>
    );
  }
}

export default App;
