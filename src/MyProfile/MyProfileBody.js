import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './MyProfileBody.css';

class MyProfileBody extends Component{
    render(){
        return (
            <div className="myProfileBody">
                <div className="list">
                    <div className="liHead">
                        SKILLS
                    </div>
                    <div className="liSubHead">
                        MAIN
                    </div>
                    <div className="liBody">
                        <div className="liItem">
                            <div className="multiItems">
                                <img className="liItemIcon" alt="html5_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/919/919827.svg"/>
                                <img className="liItemIcon" alt="css3_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/919/919826.svg"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="liBody">
                        <div className="multiItems">
                            <img className="liItemIcon" alt="javascript_logo"
                            src="https://www.flaticon.com/svg/static/icons/svg/919/919828.svg"/>
                            <img className="liItemIcon" alt="nodeJs_logo"
                            src="https://www.flaticon.com/svg/static/icons/svg/919/919825.svg"/>                     
                        </div>
                    </div>
                    <div className="liBody">
                        <div className="multiItems">
                            <img className="liItemIcon" alt="java_logo"
                            src="https://www.flaticon.com/svg/static/icons/svg/919/919854.svg"/>
                            <img className="liItemIcon" alt="oracle_logo"
                            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/oracle-512.png"/>
                            <img className="liItemIcon" alt="nodeJs_logo"
                            src="https://www.javaprofessionals.net/images/icon-mybatis.png"/>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <div className="liSubHead">
                        <img className="liIcon" src="https://www.flaticon.com/svg/static/icons/svg/32/32563.svg"></img>
                    </div>
                    <div className="liSubHead">
                        SUB
                    </div>
                    <div className="liBody">
                        <div className="liItem">
                            <div className="multiItems">
                                <img className="liItemIcon" alt="html5_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/919/919827.svg"/>
                                <img className="liItemIcon" alt="css3_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/919/919826.svg"/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyProfileBody;