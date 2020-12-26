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
                        <img alt="titleImg" className="img" src= {"https://media.fastcampus.co.kr/wp-content/uploads/2019/10/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C2.png"}>
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