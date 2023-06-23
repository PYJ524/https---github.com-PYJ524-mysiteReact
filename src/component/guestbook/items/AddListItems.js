//Link를 쓰려면 해당 코드 임포트
import {Link} from 'react-router-dom';


function AddListItems(props) {
    return (
        <table className="guestRead">
            <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '40%' }} />
                <col style={{ width: '40%' }} />
                <col style={{ width: '10%' }} />
            </colgroup>
            <tbody>
                <tr>
                    <td>{props.guestbookVo.no}</td>
                    <td>{props.guestbookVo.name}</td>
                    <td>{props.guestbookVo.regDate}</td>
                    <td><Link to="/guestbook/delete">[삭제]</Link></td>
                </tr>
                <tr>
                    <td colSpan="4" className="text-left">{props.guestbookVo.content}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default AddListItems;