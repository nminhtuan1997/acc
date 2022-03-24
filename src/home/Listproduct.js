import React, { useState } from 'react';
import { Appcontext } from '../context'
import { useContext } from 'react'
import { Link } from "react-router-dom";

function Listproduct() {
    const {listproduct} = useContext(Appcontext);
    /*const {id,img,title,price}=listproduct;*/
   
    const mang=listproduct.slice(0,4)
  return (   


    <div className="wrap-noidung2">
 
        <div className="container">
        <h3 className="title-all">Sản phẩm</h3>
        <div className="wrap-listsp">
        
        {mang.map((product,index)=>{
            
               return(
               <article key={product.id}>   
               <Link to={`/product/${product.id}`}>      
                    <div className="allinfo-product">
                    
                    <div className="img-sp">
                        <img src={product.img} alt={product.title}/>
                    </div>
                    <div className="tt">
                    <div className="title-sp">
                       <h3>{product.title}</h3>
                    </div>
                    <div className="price-sp">
                       <h3>Giá: {product.price} USD</h3>
                    </div>
                    </div>
                    
                  
                    </div>
                    </Link>
               </article>
               
               ) 
             
           
        })}
      
        </div>
        </div>
        
   </div>
    
    

   
  );
}

export default Listproduct;
