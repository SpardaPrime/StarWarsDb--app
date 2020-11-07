import React from 'react';
import {Link} from 'react-router-dom';
import './back-button.css';

const BackButton =(props)=>{
const{path}=props;
    return(
        <div className="div-back">
        <Link to={path}><button type="button" className="btn btn-primary btn-lg btn-back">◄	 Back</button></Link>
        </div>
    )
}
export default BackButton;