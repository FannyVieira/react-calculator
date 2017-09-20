import React, { Component } from 'react';
import Keyboard from './keyboard';
import Cursor from './cursor';
import '../styles/app.css'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      textScreen: '', 
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
      const {value: keyPressed} = e.target;
      this.setState((prevState, props) => {
        if(keyPressed !== '='){
          return {
            textScreen: prevState.textScreen + keyPressed
          };
        }
      });    
  };

  calculateResult(){
  }


  componentDidMount() {
      window.addEventListener("myHandleClick", this.handleClick);
  }

  componentWillUnmount() {
      window.removeEventListener("myHandleClick", this.handleClick);
  }


  render() {
    return (
      <div id="calculator">
        <Cursor textScreen={this.state.textScreen}/>
        <Keyboard handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
