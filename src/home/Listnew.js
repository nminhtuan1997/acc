import React, { useState } from 'react';
import Slider from "react-slick";
import { Appcontext } from '../context'
import { useContext } from 'react'

function Listnew() {
    const settings = {

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }]
    }
    
  const {listnews} = useContext(Appcontext);
  const {id,img,title,desc}=listnews;
  return (   

    <div className="wrap-noidung3">
        <div className="container">
        <h2 className="title-chung chungnew">Tin tức</h2>
        <Slider {...settings}>
            {listnews.map((itemnew,index)=>{
                return(
                <div className="listnew" key={itemnew.id}>
                <div className="allinfo-new">
                    <article >
                    <div className="img-new">
                        <img src={itemnew.img} alt={itemnew.title}/>
                    </div>
                    <div className="title-new">
                       <h3>{itemnew.title}</h3>
                    </div>
                    <div className="desc-new">
                       <p>{itemnew.desc}</p>
                    </div>
                    </article>
                    </div>
                </div>
                )
            })}
        
               
        </Slider>
        </div>
      
   </div>
  
    

   
  );
}

export default Listnew;
