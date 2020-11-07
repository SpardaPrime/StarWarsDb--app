

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

  _apiImgBase ='https://starwars-visualguide.com/assets/img/'

    cutId=(url)=>{
      let res=url.replace(/\D/g,'');
      return res;
    }
 
    getResource=async(url)=>{
     const res = await fetch(`${this._apiBase}${url}`);
 
     if(!res.ok){
       throw new Error(`Could not fetch ${url}, received ${res.status}`);
     }
       return await res.json();
     }
 
     getAllPeople=async()=>{
       let arr=[];
       for(let i=1;i<=8;i++){
        await this.getResource(`/people/?page=${i}`).then(res=>arr.push(...res.results.map(item=>this.transformPerson(item))));
       }
       return await arr;
     }
 
     getPerson=(id)=>{
      return this.getResource(`/people/${id}/`).then((res)=>this.transformPerson(res));
     }
 
     getAllPlanets=async()=>{
       let arr =[];
       for(let i =1 ;i<=6;i++){
        await this.getResource(`/planets/?page=${i}`).then(res=>arr.push(...res.results.map(item=>this.transformPlanet(item))));
       }
       return arr;
      }
 
     getPlanet=(id)=>{
      return this.getResource(`/planets/${id}/`).then((res)=>this.transformPlanet(res));
     }
 
     getAllStarships=async()=>{
       let arr=[];
       for(let i=1;i<=4;i++){
        await this.getResource(`/starships/?page=${i}`).then(res=>arr.push(...res.results.map(item=>this.transformShip(item))));
       }
       return await arr;
      }
 
     
     getStarship=(id)=>{
       return  this.getResource(`/starships/${id}/`).then(res=>this.transformShip(res)).catch((err)=>console.log(err))
     }

     getPersonImg=(id)=>{
       return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
     }
     getPlanetImg=(id)=>{
      return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }
    getImg=(id,type)=>{
      
      return  new Promise((resolve,reject)=>{
        const img = new Image();
        const dir = type==='person'?'characters':type==='planet'? 'planets':'starships';

        img.onload = ()=> resolve(`${this._apiImgBase}${dir}/${id}.jpg`);
        img.onerror = ()=> reject('https://fv2-2.failiem.lv/thumb_show.php?i=4qvrkjyq&view')
        img.src = `${this._apiImgBase}${dir}/${id}.jpg`;
      });
  
    }
    
    

      transformPlanet({name,population,rotation_period,diameter,url,orbital_period,climate,gravity,terrain,surface_water}){
      
        return {
                id:this.cutId(url),
                name,
                population,
                rotation_period,
                diameter,
                orbital_period,
                climate,
                gravity,
                terrain,
                surface_water,
                img:`${this._apiImgBase}planets/${this.cutId(url)}.jpg`,
                loading:true,
                error:false
        }
     }

     transformShip({name,passengers,max_atmosphering_speed,manufacturer,length,url,
      cost_in_credits,crew,consumables,hyperdrive_rating,MGLT,starship_class,}){
       return{
         id:this.cutId(url),
         name,
         passengers,
         max_atmosphering_speed,
         manufacturer,
         length,
         cost_in_credits,
         crew,
         consumables,
         hyperdrive_rating,
         MGLT,
         starship_class,
         img:`${this._apiImgBase}starships/${this.cutId(url)}.jpg`,
         loading:true,
         error:false
       }
     }

     transformPerson({name,gender,height,mass,url,hair_color,skin_color,eye_color,birth_year,homeworld}){
       return{
        id:this.cutId(url),
        name,
        gender,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        homeworld:this.cutId(homeworld),
        img:`${this._apiImgBase}characters/${this.cutId(url)}.jpg`,
        loading:true,
        error:false
       }
     }
 }
 

//  let asda = new SwapiService().getPerson(1).then((res)=>console.log(res));

