import React from 'react';
import { connect } from "react-redux";

const DashboardContainer = (props) => {
  return (
    <div className="App">
      <div>Dashboard</div>
    </div>
  );
}
const mapStateToProps = state => {
    const {currentUser} = state 
    return {
        currentUser
    }
}
  
export default connect(mapStateToProps)(DashboardContainer);
