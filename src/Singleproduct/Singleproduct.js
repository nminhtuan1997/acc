import React, { useState,useEffect } from 'react';
import { Appcontext } from '../context'
import { useContext } from 'react'
import { useParams } from "react-router-dom";
import Bre from '../banner/Bre';



function Singleproduct() {
    const {cart,increase,increasebtn,decreasebtn,showalert} = useContext(Appcontext);

    const { id } =useParams();
    
   
    return (   
       <div>
       <Bre/>
    <div className="wrap-noidung2g">
        <div className="container">
        <h2 className={`${showalert ? "modal-overlay show" : "modal-overlay"}`}>Sản phẩm đã được thêm</h2>
        {cart.filter((data)=>data.id==id).map((product,index)=>{            
               return(
                      <div className="container">
                   <article key={product.id}>
                   <div className="singlecontent">
                   <div className="singlecontentleft">
                   <img src={product.img}></img>
                   </div>
                   <div className="singlecontentright">
                      <h2 className="single-title">{product.title}</h2>
                      <h3 className="single-price">Giá: {product.price} USD</h3>
                      <div className="btn-cart">
                      <div className="btn-1">
                      <button className='amount-btn' onClick={()=>decreasebtn(product)} >
                            -
                     </button>
                            <p className='amount'>{product.amount}</p>
                     <button onClick={()=>increasebtn(product)} className='amount-btn' >
                            +
                    </button>
                    </div>
                    <div className="btn-2">
                    <button onClick={()=>increase(product)}>ADD TO CART</button>
                    </div>
                    
                    </div>
                    <div className="desc">{product.desc}</div>
                    </div>
                    </div>

                 </article>
                 </div>
               )
        })}
        </div>
        </div>
        </div>
  
  
    

   
  );
}

export default Singleproduct;
