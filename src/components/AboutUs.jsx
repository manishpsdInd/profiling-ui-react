import React, { Component } from 'react';
import PathConstants from '../pathConstants';
import { Route, Routes } from 'react-router-dom';
import ListProfileComponent from './ListProfileComponent';

class AboutUs extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
                    <h2>About Us Page</h2>
                </div>
            </div>
        );
    }
}

export default AboutUs;