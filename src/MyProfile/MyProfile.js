import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './MyProfile.css';

class MyProfile extends Component{
    render(){
        const { data } = this.props;
        return (
            <div className="myProfileTitle">
                <div className="titleArea">
                    <div className="titleImage">
                        <img alt="titleImg" className="img" src= {data.global + "/image/profile_image.jpg"}>
                        </img>
                    </div>
                    <div className="titleWords">
                        <div className="txtArea">
                            <div className="nameTxt">
                                {data.myName}
                            </div>
                            <div className="introTxt">
                                {data.myIntoduce}
                            </div>
                            <div className="careerTxt">
                                {data.career}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyProfile;