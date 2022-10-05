import { Component } from "react";

class Card1 extends Component{
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div className='card'>
                <span className='cardNamber'>Card 1</span> 
                <span className='close' onClick={() => this.hideCard('isVisible1')}>X</span>
          </div>
        )
    }
}

export default Card1;