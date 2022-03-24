import React, { useState,useEffect} from 'react';
import {datalogin} from '../data';
import Login from './Login.js';
import Header from '../header/Header';
import Hometext1 from '../home/Hometext1';
import {Routes,Route,Link,useNavigate}  from 'react-router-dom';


const getLocalStorage=()=>{ 
  var list=localStorage.getItem('infologin');
  if(list){
    return JSON.parse(localStorage.getItem('infologin'));
  }
  else{
    return {
      name:'',
      pass:'',
      
    };
  }
}
function Pagelogin({checkinfo,getname,inbtnlogout}) {

  const [data,setdata]=useState(datalogin)
  const [UserPassword,setUserPassword]=useState(getLocalStorage)
  const [msgsuccess,setmsgsuccess]=useState(false);
  const [Erro,setmsgerro]=useState(false);

 

  const navigate = useNavigate();
 
  useEffect(()=>{
    if (UserPassword.name!=="" && UserPassword.pass!==""){
       localStorage.setItem('infologin',JSON.stringify(UserPassword))
       checkinfo(true);
       getname(UserPassword.name);
       navigate('/');  
    }
   
  },[UserPassword])
  useEffect(()=>{
    const data= localStorage.getItem('setreg')
    if(data){
        setdata(JSON.parse(data));
    }
 },[]);
  useEffect(()=>{
    localStorage.setItem('setreg',JSON.stringify(data))
   
 });
  
 

 /* if(inbtnlogout=='false'){
    setUserPassword({...UserPassword,name:'',pass:''});
  }
  console.log(inbtnlogout);*/
 
  
  const reviceinfo1=(info)=>{
    setdata([...data,info])
  }
  const reviceinfo=(info)=>{

      const {username,password} =info
      {data.map((infoitem)=>{
        if(infoitem.name==username && infoitem.pass==password){          
          setUserPassword({
            name:username,
            pass:password
        }); 
             
        }
      else{
        setmsgerro(true);       
      } 
      })}  
  }
  

  const logout=()=>{
    localStorage.removeItem('infologin');
  }
  
  return (
   
    <div className="Pagelogin">
    {UserPassword.name !=="" ?
          <div>             
               <Hometext1/>
          </div>
      :(
      
        <div className="formlogin">
          <Login getinfo={reviceinfo} getinfo11={reviceinfo1} err={Erro} />
          
      </div>
      
      )}
    </div>
  );
}

export default Pagelogin;