import React, {useState,useEffect} from 'react';
import SwapiService from '../../services/swapi-service';
import './card-block.css';



const Person =(props)=>{
    const [value,setValue]=useState('loading ...');

    const {gender,height,mass,hair_color,skin_color,eye_color,birth_year,homeworld}=props.val;

    useEffect(()=>{
    const swappi = new SwapiService();
    swappi.getPlanet(homeworld).then(({name})=>setValue(name))
   },[homeworld]);
    
    return(
        <ul className="list-group list-group-flush ">
                <li className="list-group-item big">{`Gender : `}<span className="br">{gender}</span></li>
                <li className="list-group-item big">{`Height : `}<span className="br">{`${height} cm`}</span></li>
                <li className="list-group-item big">{`Weight : `}<span className="br">{`${mass} kg`}</span></li>
                <li className="list-group-item big">{`Hair color : `}<span className="br">{hair_color}</span></li>
                <li className="list-group-item big">{`Skin color : `}<span className="br">{skin_color}</span></li>
                <li className="list-group-item big">{`Eye color : `}<span className="br">{eye_color}</span></li>
                <li className="list-group-item big">{`Birth year : `}<span className="br">{birth_year}</span></li>
                <li className="list-group-item big">{`Homeworld : `}<span className="br">{value}</span></li>
            </ul>
    )
};

const Planet =(props)=>{
    const {population,rotation_period,diameter,orbital_period,climate,gravity,terrain,surface_water}=props.val;
    return(
        <ul className="list-group list-group-flush ">
                <li className="list-group-item big">{`Population : `}<span className="br">{population}</span></li>
                <li className="list-group-item big">{`Rotation period : `}<span className="br">{rotation_period}</span></li>
                <li className="list-group-item big">{`Diameter : `}<span className="br">{diameter}</span></li>
                <li className="list-group-item big">{`Orbital period : `}<span className="br">{orbital_period}</span></li>
                <li className="list-group-item big">{`Climate : `}<span className="br">{climate}</span></li>
                <li className="list-group-item big">{`Gravity : `}<span className="br">{gravity}</span></li>
                <li className="list-group-item big">{`Terrain : `}<span className="br">{terrain}</span></li>
                <li className="list-group-item big">{`Surface_water : `}<span className="br">{surface_water}</span></li>
            </ul>
    )
};

const Staship =(props)=>{
    const {passengers,max_atmosphering_speed,manufacturer,cost_in_credits,crew,consumables,hyperdrive_rating,MGLT,starship_class}=props.val;
    return(
        <ul className="list-group list-group-flush ">
                <li className="list-group-item big">{`Passengers : `}<span className="br">{passengers}</span></li>
                <li className="list-group-item big">{`Max atmosphering speed : `}<span className="br">{max_atmosphering_speed}</span></li>
                <li className="list-group-item big">{`Manufacturer : `}<span className="br">{manufacturer}</span></li>
                <li className="list-group-item big">{`Cost in credits :  `}<span className="br">{cost_in_credits}</span></li>
                <li className="list-group-item big">{`Crew :  `}<span className="br">{crew}</span></li>
                <li className="list-group-item big">{`Consumables :  `}<span className="br">{consumables}</span></li>
                <li className="list-group-item big">{`Hyperdrive_rating :  `}<span className="br">{hyperdrive_rating}</span></li>
                <li className="list-group-item big">{`MGLT :  `}<span className="br">{MGLT}</span></li>
                <li className="list-group-item big">{`Starship class : `}<span className="br">{starship_class}</span></li>
            </ul>
    )
};
export {Person,Planet,Staship};