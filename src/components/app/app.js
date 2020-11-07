import React,{useState} from 'react';
import Header from '../header/';
import RandomPlanet from '../random-planet';
import ToggleButton from '../toggle-Button/';
import SwapiService from '../../services/swapi-service';
import Hoc from '../hoc/';
import  {BrowserRouter as Router, Route} from 'react-router-dom';
import PersonDetails from '../person-details/';
import StartPage from '../start-page/';
import BackButton from '../back-button/';
import BtnArrow from '../btn-arrow/';
import './app.css';


const App =()=>{

    const [toggleBtnPln, setToggleBtnPln] = useState(true);
    const [persLng, setPersonlng] = useState();
    const [planetLng, setPlanetlng] = useState();
    const [starshipLng, setStarshiplng] = useState();
    const swapiService = new SwapiService();

    const toggleRandomPlanet=()=>{
        setToggleBtnPln(()=>!toggleBtnPln);
    }

    const itemLength=(item,type)=>{
        if(type==='person'){
            setPersonlng(()=>item.length);
        }
        if(type==='planet'){
            setPlanetlng(()=>item.length);
        }else{
            setStarshiplng(()=>item.length);
        }
    }


    const planetDetails = toggleBtnPln? <RandomPlanet time={undefined}/>:null;

    const characterOptions={
        func:swapiService.getAllPeople,
        img:swapiService.getImg,
        type:'person',
        fleng:itemLength
    };
    const planetOptions={
        func:swapiService.getAllPlanets,
        img:swapiService.getImg,
        type:'planet',
        fleng:itemLength
    };
    
    const starshipOptions={
        func:swapiService.getAllStarships,
        img:swapiService.getImg,
        type:'starship',
        fleng:itemLength
    };

    const characterBlock=Hoc(characterOptions)(({name,gender})=>`${name} ( ${gender} )`);
    const planetBlock = Hoc(planetOptions)(({name,diameter})=>`${name} ( ${diameter} )`);
    const starshipBlock = Hoc(starshipOptions)(({name,max_atmosphering_speed})=>`${name} ( ${max_atmosphering_speed} )`);
    
    return (
        
        <Router basename="/StarWarsDb/">
            
            <Route path="/" exact component={StartPage}/>
           <Route path="/home/" component={Header}/>
            <Route path="/home/" exact  render={()=>{
                return(
                    <>
                    {planetDetails}
                    <ToggleButton func={toggleRandomPlanet} toggleValue={toggleBtnPln}/>
                    </>
                )
            }}/>
            <Route path="/home/people/" exact  render={()=>characterBlock}/>
            <Route path="/home/people/:id"  render={({match})=>{
                 return (
                     <>
                        <BackButton path={'/home/people'}/>
                        <PersonDetails pers={match.params.id} img={swapiService.getImg} data={swapiService.getPerson} type={'person'}/>
                        <BtnArrow id={match.params.id} path={'/home/people/'} maxleng={persLng+1}/>
                    </>
                 )
                }}/>

            <Route path="/home/planets/" exact render={()=>planetBlock}/>
            <Route path="/home/planets/:id"  render={({match})=>{
                 return( 
                <>
                <BackButton path={'/home/planets'}/>
                <PersonDetails pers={match.params.id} img={swapiService.getImg} data={swapiService.getPlanet} type={'planet'}/> 
                <BtnArrow id={match.params.id} path={'/home/planets/'} maxleng={planetLng}/>
                </>
                 )}}/>

            <Route path="/home/starships/" exact render={()=>starshipBlock}/>
            <Route path="/home/starships/:id" render={({match})=>{ 
           return (
           <>
           <BackButton path={'/home/starships'}/>
           <PersonDetails pers={match.params.id} img={swapiService.getImg} data={swapiService.getStarship} type={'starship'}/>
           <BtnArrow id={match.params.id} path={'/home/starships/'} maxleng={starshipLng}/>
           </>
           )
           }}/>

        </Router>
    )
}



export default App;
