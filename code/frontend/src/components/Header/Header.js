/*
    Written By: Group 3
    Tested By: Group 3
    Debugged By: Group 3
*/

import React from 'react';
import '../../styles/Header/Header.scss';
import Icon from '../../assets/icons/diamondHandsLogo.png';

function Header() {
    return (
        <div className="application-header">
            <img src={Icon} alt="logo" className="icon" />
            <h1 className="application-title">Diamond Hands Investment League</h1>
        </div>
    );
}
export default Header;
