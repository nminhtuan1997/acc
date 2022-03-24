import React, { useState } from 'react';
import { Appcontext } from '../context'
import { useContext } from 'react'
import { Link } from "react-router-dom";

function Listpageproduct({posts}) {


  return (   


    <div className="wrap-noidung2 ag">
 
        <div className="container">
        <div className="wrap-listsp">
        
        {posts.map((product,index)=>{
            
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

export default Listpageproduct;
