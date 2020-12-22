import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './MyProfileBody.css';

class MyProfileBody extends Component{
    render(){
        return (
            <div className="myProfileBody">
                <div className="list">
                    <div className="liBody">
                        <div className="liItem">
                            <div className="doubleItems">
                                <img className="liItemIcon" alt="html5_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/919/919827.svg"/>
                                <img className="liItemIcon" alt="css3_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/919/919826.svg"/>
                            </div>                            
                            <div>
                                설명
                            </div>
                        </div>
                    </div>
                    <div className="liBody">
                        <div className="liItem">
                            <img className="liItemIcon" alt="javascript_logo"
                            src="https://www.flaticon.com/svg/static/icons/svg/919/919828.svg"/>
                            <div>
                                설명
                            </div>
                        </div>
                    </div>
                    <div className="liBody">
                        <div className="liItem">
                            <img className="liItemIcon" alt="nodeJs_logo"
                            src="https://www.flaticon.com/svg/static/icons/svg/919/919825.svg"/>
                            <div>
                                설명
                            </div>
                        </div>
                    </div>
                    <div className="liBody">
                        <div className="liItem">
                            <img className="liItemIcon" alt="java_logo"
                            src="https://www.flaticon.com/svg/static/icons/svg/919/919854.svg"/>
                            <div>
                                설명
                            </div>
                        </div>
                    </div>
                    <div className="liBody">
                        <div className="liItem">
                            <img className="liItemIcon" alt="oracle_logo"
                            src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-700x394.png"/>
                            <div>
                                설명
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyProfileBody;