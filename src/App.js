import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LoggedOutHeader from './components/headerComponent/loggedOut';
import LoggedInHeader from './components/headerComponent/loggedIn';
import Footer from './components/footerComponent';

class App extends Component {
  render() {
    console.log(this.props,'props in APP')
    return (
      <div className="app-main" style={{height: window.innerHeight}}>
        {this.props.currentState === 'login' ? <LoggedOutHeader /> : <LoggedInHeader currentState={this.props.currentState}/>}
        {this.props.children}
        {this.props.currentState === 'login' ? <Footer /> : null}

      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentState} = state;
  return {
    currentState
  }
}

export default withRouter(connect(mapStateToProps)(App));
