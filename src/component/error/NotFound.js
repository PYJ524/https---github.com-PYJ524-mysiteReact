import React from 'react';
import '../../assets/css/Main.css';
import '../../assets/css/mysite.css';
import img from '../../assets/image/profile.jpg';


function NotFound(){
    return (
        <div>
        <div id="wrap">
            <div id="header">
                <h1><a href="">MySite</a></h1>
                <ul>
                    <li><a href="">로그인</a></li>
                    <li><a href="">회원가입</a></li>
                </ul>
                <ul>
                    <li>황일영 님 안녕하세요^^</li>
                    <li><a href="">로그아웃</a></li>
                    <li><a href="">회원정보수정</a></li>
                </ul>
                
            </div>

            <div id="nav">
                <ul>
                    <li><a href="">방명록</a></li>
                    <li><a href="">갤러리</a></li>
                    <li><a href="">게시판</a></li>
                    <li><a href="">입사지원서</a></li>
                </ul>
                <div className="clear"></div>
            </div>

        <div id="full-content">
        

            <div id="index"> 
            
                <img id="profile-img" src={img} alt="프로필 이미지"/>
                
                <div id="greetings">
                    <p className ="text-xlarge">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                       <h1>페이지를 찾을 수 없습니다.</h1>
                    </p>	
                </div>
                
                <div className="clear"></div>
            </div>
        </div>
        <div className="clear"></div>
        
        <div id="footer">
            Copyright ⓒ 2020 황일영. All right reserved
        </div>
        
    </div>
</div>

    );
}

export default NotFound;