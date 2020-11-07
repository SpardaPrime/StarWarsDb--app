import React from 'react';
import './error-block.css';
import icon from './dead-star.png';

const ErrorBlock=()=>{
    return(
        
        <div className="error-block">
        <img className="error-size img-move" alt='Dead Star' src={icon}></img>
        <h3 className="error-text">404</h3>
        <h4 className="error-text"> Мы выслали дронов для починки этого модуля</h4>
        
        </div>
    
       
    )
}

export default ErrorBlock;