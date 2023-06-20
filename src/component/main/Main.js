import React from 'react';
import '../../assets/css/Main.css';
import '../../assets/css/mysite.css';
import img from '../../assets/image/profile.jpg';

import Header from '../include/Header';
import Footer from '../include/Footer';
import Nav from '../include/Nav';



function Main(){

    let str = "박유준";

    return (
        <div>
            <div id="wrap">
                <Header/>

                <Nav/>

            <div id="full-content">
            

                <div id="index"> 
                
                    <img id="profile-img" src={img} alt="프로필 이미지"/>
                    
                    <div id="greetings">
                        <p className ="text-xlarge">
                            <span className="bold">안녕하세요!!<br/>
                            황일영의 MySite에 오신 것을 환영합니다.<br/>
                            <br/>
                            이 사이트는 웹 프로그램밍 실습과제 예제 사이트입니다.<br/>
                            </span>
                            <br/>
                            사이트 소개, 회원가입, 방명록, 게시판으로 구성되어 있으며<br/>
                            jsp&serlvet(모델2) 방식으로 제작되었습니다.<br/>
                            <br/>
                            자바 수업 + 데이터베이스 수업 + 웹프로그래밍 수업<br/>
                            배운 거 있는거 없는 거 다 합쳐서 만들어 놓은 사이트 입니다.<br/>
                            <br/>
                            (자유롭게 꾸며보세요!!)<br/>
                            <br/><br/>
                            <a className="" href="">[방명록에 글 남기기]</a>
                        </p>	
                    </div>
                    
                    <div className="clear"></div>
                </div>
            </div>
            <div className="clear"></div>
            
            <Footer/>
            
        </div>
    </div>
    );
}
// 메인 함수를 외부에서 사용할 수 있도록 하는 코드
export default Main;