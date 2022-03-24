import React, { useState } from 'react';
import { Appcontext } from '../context';
import { useContext } from 'react';
import {Routes,Route,Link,useNavigate}  from 'react-router-dom';


function Reg({getinfo1}) {
  //const userPassword,setuserPassword
 
  const [inforeg,setinforeg]=useState({
    name:'',
    pass:''
  })
  
    const handleSubmit1=(e)=>{
      e.preventDefault();
      if(inforeg.name!=='' && inforeg.pass!==''){
        getinfo1(inforeg);
        alert('Đăng ký thành công');
      }
      else{
        alert('Username và Password không được để trống');
      }
     

      
  }


  return (   

    <div className="container">
    <div className="form-login reg">
   <form onSubmit={handleSubmit1}>
   <div className="wrap-tieude"><h2>Register</h2>
   </div>
   <input type="text" name="Name" placeholder="Name..." ></input>
   <input type="text" name="username" placeholder="User..." value={inforeg.username} onChange={(e)=>setinforeg({...inforeg,name:e.target.value})}></input>
   <input type="password" name="password" placeholder="Password..." value={inforeg.password} onChange={(e)=>setinforeg({...inforeg,pass:e.target.value})}></input>
    <button>Register</button>
   </form>


   </div>
   </div>

  );
}

export default Reg;
