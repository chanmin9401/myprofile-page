import React from 'react';
import './MyProfile.css';

const MyProfile = ({form, children}) => {
    var global = "https://chanmin9401.github.io/myprofile-page";
    //global = localhost:3000?
    return (
        <main className="myprofile">
            <div className="titleArea">
                <div className="titleImage">
                    <img alt="titleImg" className="img" src= {global + "/image/profile_image.jpg"}>
                    {/* <img alt="titleImg" className="img" src="myprofile-page/image/profile_image.jpg"> */}
                    </img>
                </div>
                <div className="titleWords">
                    <div className="txt">
                        Dev. BOB
                    </div>
                </div>
                <div className="titleInfo">
                    <div className="txt">
                      Update Info  
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MyProfile;