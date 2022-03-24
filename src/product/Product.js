import React, { useState,useEffect } from 'react';
import { Appcontext } from '../context'
import { useContext } from 'react'
import { useParams } from "react-router-dom";
import Bre from '../banner/Bre';

import Listpageproduct  from './Listpageproduct';
import Pagination  from './Pagination';


function Product() {
    const {cart} = useContext(Appcontext);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
   

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = cart.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    
    }
   

    return (   
       <div>
         <Bre/>
         <Listpageproduct posts={currentPosts}/>
         <Pagination 
                postsPerPage={postsPerPage}
                totalPosts={cart.length}
                paginate={paginate}   
                activeli={currentPage}
                
         />
      </div>
   
  );
}

export default Product;
