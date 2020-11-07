import React from 'react';
import ItemList from '../item-list/';



const Hoc =({func,img,type,fleng})=>{
        return (callback)=>{
            return(
                
                <ItemList func={func}  img={img} type={type} fleng={fleng}> 
                {callback} 
                </ItemList>
                
            )
        }
    
}
export default Hoc;


