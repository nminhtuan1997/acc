import React, { useState,useEffect} from 'react';
import {Routes,Route,Link,useNavigate}  from 'react-router-dom';
import { Appcontext } from '../context';
import { useContext } from 'react';






function Footer() {
  
 
  return (   

         <div className="footer-wraper">
         <div className="container">
            <div className="footer">
                <div className="ft1">
                    <h3 className="title-footer">CÂU CHUYỆN CHÚNG TÔI</h3>
                    <ul>
                        <li>Tiêu chuẩn Hà lan</li>
                    </ul>
                    <h3 className="title-footer">PHÁT TRIỂN BỀN VỮNG</h3>
                    <ul>
                        <li>Vì Một Việt Nam Vươn Cao Vượt Trội</li>
                        <li>Nuôi Dưỡng Từ Thiên Nhiên</li>
                        <li>Giải Thưởng Và Ghi Nhận</li>
                    </ul>

                </div>
                <div className="ft2">
                <h3 className="title-footer">SẢN PHẦM</h3>
                <ul>
                    <li>Dutch Lady</li>
                   <li>Fristi</li>
                   <li>Yomost</li>
                   <li>Ovantine</li>
                </ul>
                </div>
                <div className="ft3">
                <h3 className="title-footer">Góc dinh dưỡng</h3>
                <ul>
                    <li>Công thức nấu ăn</li>
                    <li>Dinh dưỡng từ sữa</li>
                    <li>Công thức phô mai</li>
                    <li>Chất dinh dưỡng trong sữa non</li>
                </ul>
                </div>
                <div className="ft4">
                <h3 className="title-footer">Góc dinh dưỡng</h3>
                <ul>
                    <li>Công thức nấu ăn</li>
                    <li>Dinh dưỡng từ sữa</li>
                    <li>Công thức phô mai</li>
                    <li>Chất dinh dưỡng trong sữa non</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Footer;
