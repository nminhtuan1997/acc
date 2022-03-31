


const reducer=(state,action)=>{

    /*if(action.type==="LIST-CART-AMOUNT"){
        const data= localStorage.getItem('setlist');
        const data1= localStorage.getItem('amountitem');
        if(data && data1){
            return {...state,listcart:JSON.parse(data),amountcart:JSON.parse(data1)}
        }
        
    }*/
 

    
    
    if(action.type==="TURN-OFF"){
        return {...state,showalert:false}      
    }
    
    if(action.type==="REMOVE-CART"){
        const xoa=state.listcart.filter(item=>item.id!==action.payload)
        return {...state,listcart:xoa,amountcart:state.amountcart-1}
    }
    if(action.type==="INCREASE-CART"){
        const inc=state.listcart.map((item)=>{
                if(item.id===action.payload){
                        return {...item,amount:item.amount+1}
                }
                return item
        })
        return {...state,listcart:inc}

     
    }
    if(action.type==="DECREASE-CART"){
        const dec=state.listcart.map((item)=>{
                if(item.id===action.payload){
                    if(item.amount>1){
                        return {...item,amount:item.amount-1}
                    }
                }
                return item
        })
        return {...state,listcart:dec}
    }


   
    if(action.type==="INCREASE-BTN"){
    
        const cart=state.cart.map((item)=>{
            if(item.id===action.payload.id){
               
                return{...item,amount:item.amount+1}
            }
            return item
        });
        return {...state,cart:cart}
      
    }
    if(action.type==="DECREASE-BTN"){
        const cart=state.cart.map((item)=>{
            if(item.id===action.payload.id){
                if(item.amount>1){
                    return{...item,amount:item.amount-1}
                }
               
            }
            return item
        })
        return {...state,cart:cart}
        
    }
    
    if(action.type==="ADD-CART"){
     
       if(state.listcart.length==0){
                  
                return  {...state,listcart:[...state.listcart,action.payload],amountcart:state.amountcart+1,showalert:true}
            
        }
        else{
                const newcart=state.listcart.map((item)=>{
                    return item
                });
                 const n= [...new Set(newcart)]
                 const check=n.find((item)=>item.id==action.payload.id);
                 console.log(check)
                 if(check){
                    /// xu ly khi bam add to cart lan 2 them so luong vao sp        
                    const checkcart=state.listcart.map((itemcart)=>{ 
                            if(itemcart.id===action.payload.id){
                                return{...itemcart,amount:itemcart.amount+action.payload.amount}
                            }
                           return itemcart
                    })
                    return{...state,listcart:checkcart,showalert:true}
            
                 }                
                else{
                
                    return  {...state,listcart:[...state.listcart,action.payload],amountcart:state.amountcart+1,showalert:true}
                }
          
           
            }
     
        }
        if(action.type==="TOTAL-ALL"){
                const totalall=state.listcart.reduce((itemcurent,item)=>{
                       let tongtien=item.amount*item.price;
                       itemcurent+=tongtien;
                       itemcurent= parseFloat(itemcurent.toFixed(2));
                       return itemcurent
                },0)
              
                return {...state,total:totalall}
        }
}
    

            



export default reducer
