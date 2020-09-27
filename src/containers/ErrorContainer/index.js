import React from 'react';
import { connect } from "react-redux";

const ErrorContainer = (props) => {
  return (
    <div className="App">
      <div>Error</div>
    </div>
  );
}
const mapStateToProps = state => {
    const {currentUser} = state 
    return {
        currentUser
    }
}
export default connect(mapStateToProps)(ErrorContainer);
