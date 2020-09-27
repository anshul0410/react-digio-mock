import React from 'react';
import DigioLogo from '../../assets/digio_logo.jpg'

const Footer = props => {
    return (
        <div className="footer-main">
            <div className="footer-logo-section">
                <img alt="digio" src={DigioLogo} className="footer-digio-logo" />
                <div className="footer-powered-by-section">
                    <p>Powered by</p>
                    <a href="www.digio.in">www.digio.in</a>
                </div>
            </div>
            <h4 className="footer-steps-section">1/3 Steps</h4>
        </div>
    )
}

export default Footer;