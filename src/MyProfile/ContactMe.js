import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './ContactMe.css';

class ContactMe extends Component{
    render(){
        return (
            <div className="contactMeBody">
                <div className="contactMeHead">
                    Contact Me.
                </div>
                <img className="profileImg" 
                    src="https://chanmin9401.github.io/myprofile-page/image/profile_image.jpg">
                </img>
                <div className="contactMeInfo">
                    Chanmin Park<br>
                    </br>1994.01.04<br>
                    </br><br>
                    </br>+82 10-7332-2348<br>
                    </br>chanmin9401@gmail.com
                </div>
                <div className="liItem">
                    <div className="multiItems">
                        <a href="tel:01073322348">
                            <img className="liItemIcon" alt="phone_call" 
                            src="https://www.flaticon.com/svg/static/icons/svg/893/893150.svg"/>
                        </a>
                        <a href="mailto:chanmin9401@gmail.com">
                            <img className="liItemIcon" alt="mail" 
                            src="https://www.flaticon.com/svg/static/icons/svg/732/732200.svg"/>
                        </a>
                        <a href="https://github.com/chanmin9401" target="_blank">
                            <img className="liItemIcon" alt="github" 
                            src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg"/>
                        </a>
                    </div>                            
                </div>
            </div>   
        );
    }
}

export default ContactMe;