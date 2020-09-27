import React from 'react';
import GenericCompanyLogo from '../../../assets/generic-logo-hi.png';

const LoggedOutHeader = props => {
    return (
        <div className="loggedout-header-main">
            <div className="loggedout-header-text-section">
                <h4>Sign document using</h4>
                <h5>sanket@digio.in</h5>
            </div>
            <img alt="header" src={GenericCompanyLogo} className="loggedout-header-img" />
        </div>
    )
}

export default LoggedOutHeader;