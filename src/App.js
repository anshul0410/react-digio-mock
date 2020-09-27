import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props,'props in APP')
    return (
      <div className="App">
        <div>HEADER</div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state;
  return {
    currentUser
  }
}

export default withRouter(connect(mapStateToProps)(App));
