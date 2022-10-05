import { Component } from "react";
import Card1 from './Card1';
import Card2 from './Card2'
import Card3 from './Card3';;


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
    };
    this.hideCard = this.hideCard.bind(this);
  }

  hideCard(name) {
    switch(name) {
      case 'isVisible1': 
        this.setState({isVisible1: !this.state.isVisible1});
        break;
      case 'isVisible2': 
        this.setState({isVisible2: !this.state.isVisible2});
        break;
      case 'isVisible3': 
        this.setState({isVisible3: !this.state.isVisible3});
        break;
        default: return;
    }
  }
  render() {
    const { isVisible1, isVisible2, isVisible3 } = this.state;
    return(  
      <div className='cards'>
        {isVisible1 && <Card1 /> }
        {isVisible1 || <button onClick={() => this.hideCard('isVisible1')}>
           Show
        </button>}

        {isVisible2 && <Card2 />}
        {isVisible2 || <button onClick={() => this.hideCard('isVisible2')}>
           Show
        </button>}

        {isVisible3 && <Card3 />}
        {isVisible3 || <button onClick={() => this.hideCard('isVisible3')}>
           Show
        </button>}
      </div>
    );
  }
}



export default App;


