import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorBlock from '../error-block';
import {useState} from 'react';
import {Planet} from '../card-block';


export default class RandomPlanet extends React.Component{

    swapiService = new SwapiService();

    static defaultProps ={
        time:3000
    }
    
    static propTypes ={
        time:(props,propName,componentName)=>{
            const value =props[propName];
            if(typeof value !=='number'){
                return new TypeError(`${componentName} prop error`)
            };
        }
    }

    state={
        id:null,
        name:null,
        population: null,
        rotation_period:null,
        diameter:null,
        loading:false,
        error:false
    }
    timer;
    componentDidMount=()=>{
        this.updatePlanet();
        this.timer= setInterval(this.updatePlanet,this.props.time);
    }
    componentWillUnmount=()=>{
        clearInterval(this.timer);
    }

    onError =(err)=>{
        this.setState({error:true,loading:false})
    };

    updatePlanet=()=>{
        this.setState({loading:false});
        const id=Math.floor(Math.random()*25+2);
      
        this.swapiService.getPlanet(id)
        .then((res)=>{
            console.log(res)
            this.setState(res);
        })
        .catch(this.onError);
    }

    

    render(){
        
        const {loading,error} = this.state;
        const spinner = loading===false&&error===false?<Spinner/>:null;
        const result = loading? <Block res={this.state}/>:null;
        const errorBlock = error? <ErrorBlock/>:null;

        return(
            <>
            <div className="card planet-card ">
                {result}
                {spinner}
                {errorBlock}
            </div>
            </>
        )
    }
};

const Block=(props)=>{
    const [path,setPath]= useState();
   
    const {id,name}=props.res;
    const swapiService = new SwapiService();

    swapiService.getImg(id,'planet')
    .then(res=>setPath(res)).catch(err=>setPath(err));
    
    return(
        <>
               <h3 className="card-header">{name}</h3>
            <div className="parent">
            <div className=" list-planet">
                    <img className="img" src={path} alt="Planets"></img>
                </div>
                <div className="d-block user-select-none list-text">
                <Planet val={props.res}/>
                </div>
            </div>
        </>
    )
};





