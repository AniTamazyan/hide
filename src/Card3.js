import { Component } from "react";

class Card3 extends Component{
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div className='card'>
                <span className='cardNamber'>Card 3</span> 
                <span className='close'>X</span>
          </div>
        )
    }
}

export default Card3;