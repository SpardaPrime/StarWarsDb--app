import React,{useState} from 'react';
import './item-list.css';
import Spinner from '../spinner/';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import SwapiService from '../../services/swapi-service';


export default class ItemList extends React.Component{
state={
    res:[],
    loading:false
}

static propTypes ={
    func:PropTypes.func,
    choice:PropTypes.func,
    type:PropTypes.string
}

componentDidMount=()=>{
    this.getPerson();
}
componentDidUpdate(){
    const{fleng,type}=this.props;
    fleng(this.state.res,type);
}


getPerson=()=>{
    const {func} = this.props;
    func()
    .then(res=>{
       this.setState(()=>{return{res,loading:true}})
    });
}



    render(){
        const {res,loading}=this.state;
        const {type}= this.props;
        

        const personList=res.map((item)=>{
            const {id} =item;
            const insertTxt= this.props.children(item);
            const path = type==='starship'? `starships/${id}`: type==='planet'? `planets/${id}`: `people/${id}`;
            return(
                   
                    <li key={id}  className="list-group-item lists li-cascad">
                    <Link to={path} >
                    <Block id={id} type={type} insertTxt={insertTxt}/>
                    </Link>
                    </li>
            )
        });
      



        const result = loading? personList : null;
        const spinner = loading? null : <Spinner/>;

        return(
            <>
            <div className="item-list-size">
                <ul className="list-group list-group-flush container">
                   {result} 
                   {spinner}
                </ul>
            </div>
                
            </>
        )
    }

}

const Block=(props)=>{
    const {id,type,insertTxt}=props;
    const [image,setImage]=useState();
    new SwapiService().getImg(id,type)
    .then(res=>setImage(res)).catch(err=>setImage(err));
    return (
                    <>
                    <div className='txt-list-block'>{insertTxt}</div> 
                    <div className='cont-img'>
                    <img className='img-list-size' src={image} alt='person'></img>
                    </div>
                    </>
    )

}