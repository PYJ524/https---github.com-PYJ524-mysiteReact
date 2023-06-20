import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div id="nav">
            <ul>
                <li><Link to="/guestbook/addList">방명록</Link></li>
                <li><a href="">갤러리</a></li>
                <li><a href="">게시판</a></li>
                <li><a href="">입사지원서</a></li>
            </ul>
            <div className="clear"></div>
        </div>
    )
}

export default Nav;