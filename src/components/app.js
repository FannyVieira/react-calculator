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
        else{
          return{
            textScreen: this.calculateResult()
          };
        }
      });    
  };

  calculateResult(){
    const operation = this.state.textScreen;
    let result = 0;
    if(operation.includes('+')){
    
      const [num1, num2] = operation.split('+');
      result = parseFloat(num1) + parseFloat(num2);
    
    }else if(operation.includes('-')){

      const [num1, num2] = operation.split('-');
      result = parseFloat(num1) - parseFloat(num2);
   
    }else if(operation.includes('*')){
   
      const [num1, num2] = operation.split('*');
      result = parseFloat(num1) * parseFloat(num2);
   
    }else{
   
      const [num1, num2] = operation.split('/');
      result = parseFloat(num1) / parseFloat(num2);
   
    }
    return result;
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
