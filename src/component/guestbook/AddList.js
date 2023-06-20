import React from 'react';
import '../../assets/css/guestbook.css';
import '../../assets/css/mysite.css';

import Header from '../include/Header';
import Footer from '../include/Footer';
import Nav from '../include/Nav';
import AddListItems from './items/AddListItems';

function AddList(){

    return(
    <div id="wrap">
		<Header/>

		<Nav/>

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
				<form action="" method="">
					<table id="guestAdd">
						<colgroup>
							<col style={{width: 70}}/>
							<col/>
							<col style={{width: 70}}/>
							<col/>
						</colgroup>
						<tbody>
							<tr>
								<th><label className="form-text" htmlFor="input-uname">이름</label></th>
								<td><input id="input-uname" type="text" name="name"/></td>
								<th><label className="form-text" htmlFor="input-pass">패스워드</label></th>
								<td><input id="input-pass"type="password" name="pass"/></td>
							</tr>
							<tr>
								<td colSpan="4"><textarea name="content" cols="72" rows="5"></textarea></td>
							</tr>
							<tr className="button-area">
								<td colSpan="4"><button type="submit">등록</button></td>
							</tr>
						</tbody>
						
					</table>
					<input type="hidden" name="action" value="add"/>
					
				</form>	
				<AddListItems/><AddListItems/><AddListItems/><AddListItems/>
				
					
			</div>
		</div>
		<div className="clear"></div>
		
		<Footer/>

	</div>
    )
}

export default AddList;