import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import  './start-page.css';

const StartPage=()=>{
    const [enter,setEnter] = useState(false);

    if(enter){
        return <Redirect to='/home/'/>
    }
    return(
        <>
        <div class="fade"></div>

        <section class="star-wars">
          <div class="crawl">
            <div class="title">
              <p>Episode II</p>
              <h1>Star Wars Data Base</h1>
            </div>
            
            <p>This site is an educational project written in the library react</p>

              
              <p>A long time ago in a galaxy far, far away.…</p>
        
            <p>
this database was created in agony and suffering. when trying to get experience and understand how HOC works, what render props are, why new hooks rule...</p>
<p>
Searches in the comments for what concept better led me to the war field. The strongest struck opponents with arguments, the weak fought back with insults. Who is right and who started this war...</p>
          </div>
          <button className='open' onClick={()=>setEnter(true)}>Enter</button>
        </section>
       
       
        </>
    )
}
export default StartPage;