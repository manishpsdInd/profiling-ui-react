import React, { Component } from 'react';
import PathConstants from '../pathConstants';
import "../styles/Header.css"
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <div className="header-div" >
                    <h1 className="title"><Link to={PathConstants.HOME}>Profile Management System</Link></h1>
                    <nav className="navbar">
                        <ul className="nav-list">
                            <li className="nav-item"><Link to={PathConstants.EMP_ADD}>Add Profile</Link></li>
                            <li className="nav-item"><Link to={PathConstants.ABOUT}>About</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;