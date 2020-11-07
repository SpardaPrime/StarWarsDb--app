import React from 'react';
import {Link} from 'react-router-dom';
import './btn-arrow.css';

const BtnArrow =(props)=>{
const {id,path,maxleng} = props;
    return(
        <div className="btn-bl btn-container">
        
            <Prev id={id} path={path} maxleng={maxleng}/>
            <Next id={id} path={path} maxleng={maxleng}/>
        
        </div>
    )
}
export default BtnArrow;


const Prev =(props)=>{
    const {id,path,maxleng} = props;
    let n = +id-1;
    if(n<1){
        n=maxleng;
    }
    if(path==='/home/starships/'&&n<2){
        n=maxleng;
    }
    return  <Link to={`${path}${n}`}><button className="bottom-btn">Prev</button></Link>
}

const Next =(props)=>{
    const {id,path,maxleng} = props;
    let n = +id+1;
    if(n>maxleng){
        n=1
    }
    if(path==='/home/starships/'&&n===1){
        n=2;
    }
    return  <Link to={`${path}${n}`}><button className="bottom-btn">Next</button></Link>
}