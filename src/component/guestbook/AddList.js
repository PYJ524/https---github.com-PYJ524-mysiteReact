import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 자원
import '../../assets/css/guestbook.css';
import '../../assets/css/mysite.css';

// 레이아웃
import Header from '../include/Header';
import Footer from '../include/Footer';
import Nav from '../include/Nav';

// 하위 컴포넌트
import AddListItems from './items/AddListItems';


function AddList() {

	// useState
	// [사용할 데이터, 데이터값을 변경할때 사용할 메소드]
	const [guestbookList, setGuestbookList] = useState([]);

	// 마운트 될 때
	useEffect(function () {
		console.log("로딩될 때");

		axios({
			method: 'get',
			url: '/mysite3/restapi/guestbooks',
			// headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
			// params: guestbookVo,  // get방식 파라미터로 값이 전달
			// data: guestbookVo,   // put, post, delete 방식 자동으로 JSON으로 변환 전달
			responseType: 'json' // 수신타입
		})
			.then(function (response) {
				console.log(response.data.data); //수신데이타
				setGuestbookList(response.data.data);
			})
			.catch(function (error) {
				console.log(error);
			});

	}, []);

	// 게스트북 저장 메소드
	function writeGuest(event) {
		event.preventDefault();		// 기본기능 막기
		console.log("저장");		// 이벤트 체크

		const personVo = {			// 데이터 수집
			name: event.target.name.value,
			password: event.target.pass.value,
			content: event.target.content.value
		}

		console.log(personVo);

		// 통신 전송
			axios({
				method: 'post',
				url: '/mysite3/restapi/guestbooks',
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				data: personVo,   	//put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json'	//수신타입
			})
				.then(function (response) {
					console.log(response); //수신데이타
					setGuestbookList([response.data.data, ...guestbookList]);

					//초기화
					event.target.name.value="";
					event.target.pass.value="";
					event.target.content.value="";
				})
				.catch(function (error) {
					console.log(error);
				});

	}

	return (
		<div id="wrap">
			<Header />

			<Nav />

			<div id="aside">
				<h2>방명록</h2>
				<ul>
					<li>일반방명록</li>
					<li>ajax방명록</li>
				</ul>
			</div>

			<div id="content">

				<div id="content-head">
					<h3>일반방명록</h3>
					<div id="location">
						<ul>
							<li>홈</li>
							<li>방명록</li>
							<li className="last">일반방명록</li>
						</ul>
					</div>
					<div className="clear"></div>
				</div>

				<div id="guestbook">
					<form action="" method="" onSubmit={writeGuest}>
						<table id="guestAdd">
							<colgroup>
								<col style={{ width: 70 }} />
								<col />
								<col style={{ width: 70 }} />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<th><label className="form-text" htmlFor="input-uname">이름</label></th>
									<td><input id="input-uname" type="text" name="name" /></td>
									<th><label className="form-text" htmlFor="input-pass">패스워드</label></th>
									<td><input id="input-pass" type="password" name="pass" /></td>
								</tr>
								<tr>
									<td colSpan="4"><textarea name="content" cols="72" rows="5"></textarea></td>
								</tr>
								<tr className="button-area">
									<td colSpan="4"><button type="submit">등록</button></td>
								</tr>
							</tbody>

						</table>
					</form>

					{
						guestbookList.map(
							function (guestbookVo, i) {
								// 코드
								return <AddListItems key={i} guestbookVo={guestbookVo} />;
							},
						)
					}
				</div>
			</div>
			<div className="clear"></div>
			<Footer />
		</div>
	)
}

export default AddList;