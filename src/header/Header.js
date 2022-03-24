import React, { useState,useEffect,useRef} from 'react';
import {Routes,Route,Link,useNavigate}  from 'react-router-dom';
import logo from '../img/logog.png';
import logo1 from '../img/cvc-1.png';
import { Appcontext } from '../context';
import { useContext } from 'react';
import Pagelogin from '../login/Pagelogin';
import { FaBars, FaTimes } from 'react-icons/fa'
import Banner from '../banner/Banner'





function Header() {
  
  /*const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) */

  const navigate = useNavigate();
  const [checklogin,setchecklogin]=useState(false);
  const [namedisplay,setnamedisplay]=useState('');
  const [btnlogout,setbtnlogout]=useState(false);
 
const namelocal = localStorage.getItem('infologin');

const { amountcart,clickclosereg,opentoggle,clicktoggle,clicktogglemenu } = useContext(Appcontext);
  
  const revicelogin=(data)=>{
    setchecklogin(data);
  }
  const getname=(data)=>{
    setnamedisplay(data);
  }
 
  const submitlogout=()=>{
    localStorage.removeItem('infologin')
    setnamedisplay('');
    setchecklogin(false);
    setbtnlogout(true)
    btnlogout(true);
  }
  /*const myRef = useRef(null)
  const scrolllogin = () => {scrollToRef(myRef)}*/
 
  
 
  return (   
    <div className="header-wrapper">
        <div className="header-main">
            <div className="container">
                    <div className="header-left">
                            <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="header-right">
                    <div className="content-menuright">

                        <ul className={`${opentoggle ?"menu-item toggle-menu":"menu-item"}`}>
                        <li> <button className="close-btn" onClick={clicktoggle}>
                              <FaTimes/>
                        </button></li>
                            <li><Link to="/" onClick={clicktogglemenu} >Trang chủ</Link></li>
                            <li><Link to="/" onClick={clicktogglemenu}>Giới thiệu</Link></li>
                            <li><Link to="/product" onClick={clicktogglemenu}>Sản phẩm</Link></li>
                            <li><Link to="/" onClick={clicktogglemenu}>Tuyển dụng</Link></li>
                            <li><Link to="/" onClick={clicktogglemenu}>Tuyển dụng</Link></li>
                            
                        </ul>
                        <button className="nav-toggle" onClick={clicktoggle} >
                            <FaBars/>
        
                       </button>
                      
                        <Link to="/checkcart">
                        <div className="cart">

                        <div className='nav-container'>
                             <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                              <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
                              </svg>
                              <div className='amount-container'>
                            <p className='total-amount'>{amountcart}</p>
                          </div>
                        </div>

                        </div>

                        </Link>
                        {namelocal==null?
                            <div className="login-btn">
                             <Link className="loginbtn" to="/login" onClick={clickclosereg}>Login</Link>
                             </div>
                                  :(
                        
                          <span className="wrap-user"><img className="logo" src={logo1} alt="logo" />
                          <p className="sub-logout"><Link onClick={submitlogout} to="/login" >Logout</Link></p>
                          </span>
                         )}
      
                    </div>
                    </div>
            </div>
        </div>
     
            

        <div className="" >
        <Routes>
      <Route path="/login"  element={<Pagelogin checkinfo={revicelogin} getname={getname} inbtnlogout={btnlogout} />}></Route>
      </Routes>
      </div>
    </div>
    
  );
}

export default Header;
