import React, { Component } from 'react';
import AnimalCards from '../components/cards/AnimalCards';
import './Animals.css';


class Animals extends Component {
    constructor() {
        super();

    }

    state = {

        animals: [
            { name: "Cat", type: "cat", number: 0 },
            { name: "Dog", type: "dog", number: 0 },
            { name: "Wolf", type: "wolf", number: 0 },
        ]
    }





    render() {
        const { animals } = this.state;
        return (

            <React.Fragment>
                <div className="flex-container">

                    {animals.map(animal => (
                        <AnimalCards name={animal.name} type={animal.type} number={animal.number} />
                    ))}
 
                </div>
               
            </React.Fragment>
        );
    }
}

export default Animals;