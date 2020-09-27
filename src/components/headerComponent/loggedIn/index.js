import React from 'react';

const LoggedInHeader = props => {
    return (
        <div className="loggedin-header-main">
            <div className="loggedin-header-text-section">
                {props.currentState === 'adhar' ? <h4>Registering Adhar</h4> : 
                <>
                    <h4>{props.signingStatus ? 'Signed In' : 'Signing...'}</h4>
                    <p>Mutual Non-Disclosure Agreement</p>
                </>
                }
            </div>
        </div>
    )
}

export default LoggedInHeader;