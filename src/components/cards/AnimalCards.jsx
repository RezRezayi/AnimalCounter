import React, { useState } from 'react';
import  "./AnimalCards.css";




const AnimalCards =({name,type,number}) => {



   

    return (


       <React.Fragment>


            <div className="flex-content">
                <h3>Animal's name :{name}</h3>
                <h3>Animals' type :{type}</h3>
                <h3>Number :{number}</h3>
                <hr/>
                {/* button component place */}
                <button>Shop Now!</button>
            </div>
            
       </React.Fragment>


          
    );
};

export default AnimalCards;