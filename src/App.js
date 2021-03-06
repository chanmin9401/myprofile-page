import React, { Component } from 'react';
import MyProfile from './MyProfile/MyProfile';
import MyProfileBody from './MyProfile/MyProfileBody';
import ContactMe from './MyProfile/ContactMe';
import MyProfileFooter from './MyProfile/MyProfileFooter';
import './App.css'

class App extends Component{
  profileInfo = {
    global : "https://chanmin9401.github.io/myprofile-page",
    //global : "http://localhost:3000/myprofile-page",
    myName : "Dev. BOB",
    myIntoduce : "Junior F/E Developer.",
    career : "SINCE. 18.01"
  }

  render() {
      return (
        <div className ="contents">
          <MyProfile data={this.profileInfo}></MyProfile>
          <MyProfileBody></MyProfileBody>
          <ContactMe></ContactMe>
          <MyProfileFooter></MyProfileFooter>
        </div>
      );
  }
}

export default App;