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


handleAddNumber = () =>{
    this.setState ({
        animals: [
            { name: "palang", type: "rrrrwww", number: 1 },
            { name: "shotor", type: "pfffff", number:1 },
            { name: "asb", type: "hiiiii", number: 1 },
        ]
    })
}


    render() {
        const { animals } = this.state;
        return (

            <React.Fragment>
                <div className="flex-container">

                    {animals.map(animal => (
                        <AnimalCards name={animal.name} type={animal.type} number={animal.number} />
                    ))}

<button onClick={this.handleAddNumber}>Add too bag</button>

                   
                </div>

            </React.Fragment>
        );
    }
}

export default Animals;