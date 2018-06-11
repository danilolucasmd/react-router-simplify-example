import React, { Component } from 'react';
import { Router } from 'react-router-simplify';
import Pages from 'components/Pages';

export default class App extends Component {
  render() {
    return (
      <Router authenticated={true}>
        <Pages />
      </Router>
    );
  }
}
