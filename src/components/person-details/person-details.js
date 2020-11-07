import React ,{useState} from 'react';
import './person-details.css';
import Spinner from '../spinner/';
import {Person,Planet,Staship} from '../card-block/';

export default class PersonDetails extends React.Component{

    state={loading:false};

    componentDidMount=()=>{
        this.getPersons(this.props.pers)
    }

    componentDidUpdate=(prevProps)=>{
        const {pers} =this.props;
        if(prevProps.pers!==pers){
            this.getPersons(pers)
        }
    }

    getPersons=(id)=>{
        const{data}=this.props;
        this.setState({loading:false});
        data(id)
        .then(res=>{
            this.setState(res);
        }).catch((error)=>{
            console.log('error');
        });
    }

    render(){ 
        const{loading}=this.state;
        const{img,type}=this.props;
        const spin =loading ? null : <Spinner/>;
        const personList = loading ? <BlockValue value={this.state} img={img} type={type}/> : null;
        
        return(
            <>
            <div className="card planet-card ">
            {personList}
            {spin}
            </div>
            </>
        )
    }
};


const BlockValue=(props)=>{
    const {id,name}=props.value;
    const {img,type}=props;

    const [path,setPath] = useState();

    img(id,type).then(res=>setPath(()=>res)).catch(err=>setPath(()=>err))

    const render=type==='person'? <Person val={props.value}/> : type==='planet'? <Planet val={props.value}/> : <Staship val={props.value}/>;
    return(
        <>
        <h3 className="card-header">{name}</h3>
        <div className="parent">
        <div className=" list-planet">
                <img className="img" alt="Person" src={path}></img>
            </div>
            <div className="d-block user-select-none list-text">
                {render}
            </div>
        </div>
        </>
    )
};

