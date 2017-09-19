import React, {Component} from 'react';
import '../styles/Keyboard.css'

class Keyboard extends Component{

    render(){
        return(
            <div className ="keys">
                <button value="7" onClick={this.props.handleClick}>7</button>
                <button value="8" onClick={this.props.handleClick}>8</button>
                <button value="9" onClick={this.props.handleClick}>9</button>
                <button value="+" onClick={this.props.handleClick} className="operator">+</button>
                <button value="4" onClick={this.props.handleClick}>4</button>
                <button value="5" onClick={this.props.handleClick}>5</button>
                <button value="6" onClick={this.props.handleClick}>6</button>
                <button value="-" onClick={this.props.handleClick} className="operator">-</button>
                <button value="1" onClick={this.props.handleClick}>1</button>
                <button value="2" onClick={this.props.handleClick}>2</button>
                <button value="3" onClick={this.props.handleClick}>3</button>
                <button value="/" onClick={this.props.handleClick} className="operator">÷</button>
                <button value="0" onClick={this.props.handleClick}>0</button>
                <button value="." onClick={this.props.handleClick}>.</button>
                <button value="=" onClick={this.props.handleClick} className="eval">=</button>
                <button value="x" onClick={this.props.handleClick} className="operator">x</button>
            </div>
        )
    }
}
export default Keyboard