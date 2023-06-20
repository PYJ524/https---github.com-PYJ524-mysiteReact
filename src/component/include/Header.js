import {Link} from 'react-router-dom';

function Header(){

    return(
        <div id="header">
            <h1><Link to="/">MySite</Link></h1>
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
    )
    
}

export default Header;