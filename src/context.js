import React, { useState, useContext, useReducer, useEffect } from 'react'
import {products} from './data'
import {news} from './data'
import {listcheck} from './data'
import reducer from './reducer'

const Appcontext=React.createContext();

const AppProvider = ({children})=>{

    const [listproduct,setlistproduct]=useState(products);
    const [listnews,setlistnews]=useState(news);
    const [alert,setalert]=useState(false);
    const[openreg,setopenreg]=useState(true);
    const[opentoggle,setopentoggle]=useState(false);
    const [listcheck,setlistcheck]=useState([
        
    ]);
    
  
    
   
    
    
    const initialState={       
        listcart:listcheck,
        showalert:false,
        cart:listproduct,
        amountcart:0,
        amount:0,   
        total:0

    }
    
    
    const [state, dispatch] = useReducer(reducer,initialState)
    const decreasebtn=(product)=>{
        dispatch({type:'DECREASE-BTN',payload:product})
    }
    const increasebtn=(product)=>{
        dispatch({type:'INCREASE-BTN',payload:product})
    }
    const increase=(product)=>{
        dispatch({type:'ADD-CART',payload:product})
    }
    const increasecheckcart=(id)=>{
        dispatch({type:'INCREASE-CART',payload:id})
    }
    const decreasecheckcart=(id)=>{
        dispatch({type:'DECREASE-CART',payload:id})
    }
    const removecheckcart=(id)=>{
        dispatch({type:'REMOVE-CART',payload:id})
    }
  
    const clickopenreg=()=>{
        setopenreg(false);
    }
    const clickclosereg=()=>{
        setopenreg(true);
    }
    const clicktoggle=()=>{
        setopentoggle(!opentoggle);
    }
    const clicktogglemenu=()=>{
        setopentoggle(false);
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch({ type:'TURN-OFF'})
        }, 1000);
        return () => clearTimeout(timeout);
      },[state.showalert]);
     
      useEffect(()=>{
        
          dispatch({ type:'LIST-CART-AMOUNT'})
        
      },[]);
      useEffect(()=>{
          localStorage.setItem('setlist',JSON.stringify(state.listcart))
          localStorage.setItem('amountitem',JSON.stringify(state.amountcart))
          
      });
     
    const all={
            ...state,
            increase,
            increasebtn,
            decreasebtn,
            listproduct,
            listnews,
            increasecheckcart,
            removecheckcart,
            openreg,
            clickclosereg,
            clickopenreg,
            decreasecheckcart,
            clicktoggle,
            clicktogglemenu,
            opentoggle

         
    }
    useEffect(()=>{
        dispatch({type:'TOTAL-ALL'})
      }, [state.listcart] )
   

    return <Appcontext.Provider value={all} >
                {children}
    </Appcontext.Provider>


}
export { Appcontext , AppProvider };