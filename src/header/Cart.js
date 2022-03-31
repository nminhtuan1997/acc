import React, { useState } from 'react';
import { Appcontext } from '../context'
import { useContext } from 'react'
import Bre from '../banner/Bre';




function Cart() {
    const {listcart,decreasecheckcart,increasecheckcart,removecheckcart,total} = useContext(Appcontext);

  return (   
    <div>
    <Bre/>
    <div className="wrap-contentcart">

    {listcart=='' ? <div className="container"><h1 class="chuasp">Chưa có sản phẩm </h1></div>:  
        <div className="container">
        <div className="blocktotal">
      
       
                    <table >
                       <thead>
                            <tr>
                              <th></th>
                              <th>Tên sản phẩm</th>
                              <th>Số tiền</th>
                              <th>Số lượng</th>
                              <th></th>
                    </tr>
                    </thead>
                        <tbody>
                        {listcart.map((product,index)=>{            
                           return( 
                            <tr key={product.id}>

                              <td className="tab-img"><img src={product.img}></img></td>
                              <td>{product.title}</td>
                              <td>{product.price}</td>
                              <td>
                              <div className="btn-cart">
                                  <div className="btn-1">
                                    <button className='amount-btn' onClick={()=>decreasecheckcart(product.id)}>
                                      -
                                    </button>
                                    <p className='amount'>{product.amount}</p>
                                    <button  className='amount-btn' onClick={()=>increasecheckcart(product.id)} >
                                      +
                                    </button>
                                  </div>
                                </div>

                              </td>
                              <td  className="td-xoa"><a onClick={()=>removecheckcart(product.id)} >Xóa</a></td>
                    </tr>
                    )
                  })}
                  
                  </tbody>
                  
  
                 
                  
                </table>
                <div className="cart-total">
                  <span >Total: {total} USD</span>
                  </div>
                </div>
                
           
        </div>
        
    }
        </div>
  
  
        </div>

   
  );
}

export default Cart;
