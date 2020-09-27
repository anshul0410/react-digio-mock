import React from 'react';
import { connect } from "react-redux";
import Footer from '../../components/footerComponent';

const LoginContainer = (props) => {
  return (
    <div className="login-container-main">
        <div className="login-container-content-wrapper">
            <div className="login-social-section">
                <h4>Sanket@digio.in uses Gmail?</h4>
                <p>login using google</p>
                <button > Google</button>
            </div>
            <div className="section-differentiator">
                <h3>OR</h3>
            </div>
            <div className="login-with-email-section">
                <h5>Proceed with your email address</h5>
                <input type="text" />
            </div>
            <div className="login-confirm-policy-section">
                <p>By confirming i confirm to the terms and service and privacy policy of <a href="www.digio.in">Digio.in</a></p>
                <button>CONTINUE</button>
            </div>
        </div>
        <Footer />
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
