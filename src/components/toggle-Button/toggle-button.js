import React from 'react';
import './toggle-button.css';

const ToggleButton =({func,toggleValue})=>{

    const text=toggleValue?'Close block random planet':'Open block random planet';
    const clazz = toggleValue?`btn btn-warning btn-lg btn-block tgb-size`:`btn btn-warning btn-lg btn-block tgb-size tgl-marg`;
    return(
        <div>
            <button onClick={func} className={clazz}>{text}</button>
        </div>
    )
}

export default ToggleButton;