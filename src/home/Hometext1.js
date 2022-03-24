import React, { useState } from 'react';
import Listproduct from './Listproduct';
import Listnew from './Listnew';
import sa1 from '../img/sa1.png';
import sa2 from '../img/sa2.png';
import sa3 from '../img/sa3.png';
import vungtroi from '../img/vungtroi.jpg';
import Banner from '../banner/Banner'


function Hometext1() {
  
  return (   
    <div>
    <Banner/>
    <div className="content">
    <div className="wrap-noidung1">
      <div className="container">
          <div className="wrap-noidung">
            <div className="wrap-infobox">
              <img src={sa1} alt={sa1}/>
              <div className="title-description">
                <h3>Tự nhiên 100%</h3>
              </div>
              <div className="description">
              Chiết xuất từ 100% bất chợt thuần túy như diệp hạ châu, cỏ lọ nồi,…
              </div>
            </div>
            <div className="wrap-infobox">
              <img src={sa2} alt={sa2}/>
              <div className="title-description">
                <h3>Tự nhiên 100%</h3>
              </div>
              <div className="description">
              Chiết xuất từ 100% bất chợt thuần túy như diệp hạ châu, cỏ lọ nồi,…
              </div>
            </div>
            <div className="wrap-infobox">
              <img src={sa3} alt={sa3}/>
              <div className="title-description">
                <h3>Tự nhiên 100%</h3>
              </div>
              <div className="description">
              Chiết xuất từ 100% bất chợt thuần túy như diệp hạ châu, cỏ lọ nồi,…
              </div>
            </div>
           
          </div>
          <div className="textchung">
              <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block.</p>
            </div>
      </div>
   </div>
    
    <Listproduct/>
    <div className="single-img">
      <img src={vungtroi}></img>
    </div>
</div>
</div>
  );
}

export default Hometext1;
