import { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isVisible: false,
    })
  }
  render() {
    const { isVisible } = this.state;
    return(  
        // {
        //   isVisible?
        // }
       <div className='cards'>
        <div className='card'><span className='cardNamber'>Card 1</span> 
       <span className='close' onClick={() => this.toggle}>X</span></div>

       <div className='card'><span className='cardNamber'>Card 2</span>
         <span className='close' onClick={() => this.toggle}>X</span></div>

        <div className='card'><span className='cardNamber'>Card 3</span> 
       <span className='close' onClick={() => this.toggle}>X</span></div> 
     </div>
    );
  }
}



export default App;


