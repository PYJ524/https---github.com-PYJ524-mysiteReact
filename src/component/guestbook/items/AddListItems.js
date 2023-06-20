
function AddListItems() {
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
                    <td>1234555</td>
                    <td>이정재</td>
                    <td>2020-03-03 12:12:12</td>
                    <td><a href="/guestbook/delete">[삭제]</a></td>
                </tr>
                <tr>
                    <td colSpan="4" className="text-left">방명록 글입니다. 방명록 글입니다.</td>
                </tr>
            </tbody>
        </table>
    );
}

export default AddListItems;