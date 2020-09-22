import React, { useState } from 'react';
import  "./AnimalCards.css";
import Details from '../detail/Details';

import{Route,Switch,Link} from 'react-router-dom';


const AnimalCards =({name,type,number}) => {



   

    return (


       <React.Fragment>


            <div className="flex-content">
                <h3>Animal's name :{name}</h3>
                <h3>Animals' type :{type}</h3>
                <h3>Number :{number}</h3>
                <hr/>
                {/* button component place */}
   
               <button> <Link to="/details">Show Details</Link> </button> 
                
            </div>
            
       </React.Fragment>


          
    );
};

export default AnimalCards;