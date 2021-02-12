import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './MyProfileBody.css';

class MyProfileBody extends Component{
    render(){
        return (
            <div className="myProfileBody">
                <div className="list">
                    <div className="skillLiHead">
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
                        <div className="liItem">
                            <div className="multiItems">
                                <img className="liItemIcon" alt="javascript_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/919/919828.svg"/>
                                <img className="liItemIcon" alt="nodeJs_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/919/919825.svg"/>                     
                            </div>
                        </div>
                    </div>
                    <div className="liBody">
                        <div className="liItem">
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
                                <img className="liItemIcon" alt="kotlin_logo"
                                src="https://cdn.worldvectorlogo.com/logos/kotlin-1.svg"/>
                                <img className="liItemIcon" alt="react_logo"
                                src="https://www.flaticon.com/svg/static/icons/svg/1126/1126012.svg"/>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="list">
                    <div className="careerLiHead">
                        CAREER
                    </div>
                    <div className="liBody">
                        <div className="liItem">
                            <div className="multiItems">
                                <img className="liItemIcon" alt="html5_logo"
                                src="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MTVfMjMg/MDAxNjAwMDk1OTUyMTQz.Vp1zFZC8tooaLyqyUOvQ--js9qmfJ54ldj177eczk34g.FF9erg0AXw3xY4LtXeTKLjq-9RIIxtAkOPDa3ZS9pbkg.PNG.abcwlgns/%EC%BC%80%EC%9D%B4%EC%B9%B4.png?type=w800"/>
                                <img className="liItemIcon" alt="css3_logo"
                                src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F996FFB505C18FA12160CE2"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="careerLiCont">
                        <div className="head">2018.01.02 ~ </div>

                        <div className="body">• Mobile Web App</div>
                        <div className="bodyDetail">영업사원 업무지원 모바일 서비스</div>
                        <div className="bodyDetail">Skills | AngularJs, Ionic, Cordova, RestApi, MyBatis</div>

                        <div className="body">• 전자계약 시스템</div>
                        <div className="bodyDetail">전자문서 생성 및 관리 서비스</div>
                        <div className="bodyDetail">Skills | JSP, JQuery, Spring, RestApi, MyBatis</div>


                        <div className="body">• 비대면 전자계약 서비스</div>
                        <div className="bodyDetail">카카오페이 연동을 통한 본인인증과 알림톡 서비스를 활용한 비대면 전자계약 서비스</div>
                        <div className="bodyDetail">Skills | JSP, JQuery, Spring, RestApi, MyBatis</div>

                        <div className="body">• 전자문서관리 시스템</div>
                        <div className="bodyDetail">작성된 전자문서 관리 및 분류, 서식 관리 기능을 제공하는 서비스</div>
                        <div className="bodyDetail">Skills | JSP, JQuery, Spring, RestApi, MyBatis</div>
                        
                        <div className="body">• 예약관리 시스템</div>
                        <div className="bodyDetail">온라인 예약을 관리하고 상담상태를 변경하여 중복 예약을 막기 위한 서비스</div>
                        <div className="bodyDetail">Skills | JSP, JQuery, Spring, RestApi, MyBatis</div>

                        <div className="body">• ServerSide & Tools</div>
                        <div className="bodyDetail">Server | Tmax, Jeus6</div>
                        <div className="bodyDetail">Tools | Eclipse, Jenkins, Jennifer, SQL Gate</div>
                        <div className="bodyDetail">Config Mng. | SVN</div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MyProfileBody;