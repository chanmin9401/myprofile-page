import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './MyProfileFooter.css';

class MyProfileFooter extends Component{
    render(){
        return (
            <div className="myProfileFooter">
                <div className="footerTxt">
                    Bob's Dev Profile
                </div>
            </div>
        );
    }
}

export default MyProfileFooter;