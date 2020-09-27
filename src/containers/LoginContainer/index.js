import React, { useState } from 'react';
import { connect } from "react-redux";
import { adharNumberVerify, emailValidator, otpVerify } from '../../validators/validate';
import AdharImg from '../../assets/1200px-Aadhaar_Logo.svg.png';
import {updateCurrentState, updateUserSign} from '../../redux/actions';
import DocImg from '../../assets/doc.png'

const LoginContainer = (props) => {
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [adhar, setAdhar] = useState(null)
    const [otp, setOtp] = useState(null)
    const [showVerified, setShowVerified] = useState(false)
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleContinueClick = () => {
        props.getUpdatedState('adhar')
    }
    const handleAdharInput = (event) => {
        setAdhar(event.target.value);
    }
    const handleAdharOTP = (event) => {
        setOtp(event.target.value);
    }
    const handleOtpSubmit = () => {
        props.getUpdatedState('signing')
        setTimeout(() => {
            setShowVerified(true);
            props.updateUserSign(true)
        }, 3000)
    }

  return (
    <div className="login-container-main">
        {props.currentState === 'login' ? <div className="login-container-content-wrapper">
            <div className="login-social-section">
                <h4>Sanket@digio.in uses Gmail?</h4>
                <p>login using google</p>
                <button className="social-login-button"><i className="fab fa-google-plus-g"></i> Google</button>
            </div>
            <div className="section-differentiator">
                <h3 className="text">OR</h3>
            </div>
            <div className="login-with-email-section">
                <h5>Proceed with your email address</h5>
                <input type="text" value={email} onChange={handleEmailChange} />
            </div>
            <div className="login-confirm-policy-section">
                <p>By confirming i confirm to the terms and service and privacy policy of <a href="www.digio.in">Digio.in</a></p>
                <button onClick={handleContinueClick} className={`login-continue-button ${emailValidator(email) ? '' : 'disabled'}`} disabled={emailValidator(email) ? false : true}>CONTINUE</button>
            </div>
        </div> : 
        props.currentState === 'adhar' ? <div className="login-container-content-wrapper">
            <div className="adhar-details-section">
                <div className="adhar-input-section">
                    <img src={AdharImg} alt="adhar" className="adhar-img"/>
                    <div className="adhar-input-verify-section">
                        <input type="number" onChange={handleAdharInput}/>
                        <button disabled={adharNumberVerify(adhar) ? false : true} >Verify</button>
                    </div>
                </div>
                <div className="agreement-section">
                    <i className={`fas ${checkbox ? 'fa-check-square' : 'fa-square'} checkbox-item`} style={checkbox ? {color: 'blue'} : {}} onClick={() => setCheckbox(!checkbox)}></i>
                    <p>I agree to get eSign this <span>KYC document</span> to get started</p>
                </div>
                <div className="adhar-otp-section">
                    <input type="number" onChange={handleAdharOTP} disabled={!checkbox}/>
                    <button disabled={otpVerify(otp) && checkbox ? false : true} onClick={handleOtpSubmit} >Submit</button>
                </div>
            </div>
            <div className="document-content-div">
                <div className="overlay"></div>
                <div className="document-div">
                    <img src={DocImg} alt="doc" />
                </div>
                <div className="static-button-div">
                    <button className="static-otp-button">Request OTP to sign</button>
                </div>
            </div>
        </div>
        : null 
        }
        {
            props.currentState === 'signing' ? <div className="login-container-content-wrapper">
            <div className="adhar-signin-process-section">
                <div className="" >
                    {showVerified ? <i className="far fa-check-circle" style={{color: 'green', fontSize: 25}}></i> : null}
                    <h4>{showVerified ? 'Adhar verified successfully' : 'Loading...'}</h4>
                </div>
            </div>
            <div className="document-content-div">
                {!showVerified ? <div className="overlay"></div>: null}
                <div className="document-div">
                    <img src={DocImg} alt="doc"/>
                </div>
                <div className="static-button-div">
                    <button className="static-otp-button">Request OTP to sign</button>
                </div>
            </div>
        </div>
        : null 
        }
        
    </div>
  );
}

const mapStateToProps = state => {
    const {currentState} = state 
    return {
        currentState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUpdatedState: data => dispatch(updateCurrentState(data)),
        updateUserSign: data => dispatch(updateUserSign(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
