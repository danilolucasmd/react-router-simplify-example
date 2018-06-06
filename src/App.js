import React, { Component } from 'react';
import Router from 'components/Router';
import Pages from 'components/Pages';

class App extends Component {
  render() {
    return (
      <Router authenticated={true}>
        <Pages />
      </Router>
    );
  }
}

export default App;
