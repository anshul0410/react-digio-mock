import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LoggedOutHeader from './components/headerComponent/loggedOut';
import LoggedInHeader from './components/headerComponent/loggedIn';
import Footer from './components/footerComponent';

class App extends Component {
  render() {
    return (
      <div className="app-main" style={{height: window.innerHeight}}>
        {this.props.currentState === 'login' ? <LoggedOutHeader /> : <LoggedInHeader signingStatus={this.props.signingStatus} currentState={this.props.currentState}/>}
        {this.props.children}
        {this.props.currentState === 'login' ? <Footer /> : null}

      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentState, signingStatus} = state;
  return {
    currentState,
    signingStatus
  }
}

export default withRouter(connect(mapStateToProps)(App));
