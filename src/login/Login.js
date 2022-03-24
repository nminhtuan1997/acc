import React, { useState } from 'react';
import { Appcontext } from '../context';
import { useContext } from 'react';
import Reg from './Reg';
import {Routes,Route,Link,useNavigate}  from 'react-router-dom';


function Login({getinfo,err,getinfo11}) {
  //const userPassword,setuserPassword

  const { openreg,clickopenreg } = useContext(Appcontext);
 
  const [infologin,setinfologin]=useState({
        username:'',
        password:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        getinfo(infologin);
        
        setinfologin({
            username:'',
            password:''
          })
       
    }
    
   const revicecomponentreg=(info)=>{
      getinfo11(info);
      
   }


  return (   

    <div className="container">
    {openreg?
    <div className="form-login">
   <form onSubmit={handleSubmit}>
   <div className="wrap-tieude"><h2>Login</h2>
   <div className="thongbao">{err? (<p>Tài khoản hoặc mật khẩu không đúng</p>):""}</div>
   </div>
   <input type="text" name="username" placeholder="User..." value={infologin.username} onChange={(e)=>setinfologin({...infologin,username:e.target.value})}></input>

   <input type="password" name="password" placeholder="Password..." value={infologin.password} onChange={(e)=>setinfologin({...infologin,password:e.target.value})}></input>
    <div className="btn-chung">
    <button>Login</button>
    <div className="btn-reg">
    <a className=""  onClick={clickopenreg} >Registration</a>
    </div>
    </div>
   </form>

   
   </div>:(
    <Reg getinfo1={revicecomponentreg}/>
   )}
   </div>

  );
}

export default Login;
