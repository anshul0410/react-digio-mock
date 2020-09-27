import React from 'react';
import { connect } from "react-redux";

const LoginContainer = (props) => {
  return (
    <div className="App">
      <div>Login</div>
    </div>
  );
}

const mapStateToProps = state => {
    const {currentUser} = state 
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(LoginContainer);
