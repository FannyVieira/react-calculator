import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/keyboard.css'

const Keyboard = (props) => {
   const { handleClick } = props;
   return(
        <div>
            <div className="keys">
                <button value="7" onClick={handleClick}>7</button>
                <button value="8" onClick={handleClick}>8</button>
                <button value="9" onClick={handleClick}>9</button>
                <button value="+" onClick={handleClick} className="operator">+</button>
                <button value="4" onClick={handleClick}>4</button>
                <button value="5" onClick={handleClick}>5</button>
                <button value="6" onClick={handleClick}>6</button>
                <button value="-" onClick={handleClick} className="operator">-</button>
                <button value="1" onClick={handleClick}>1</button>
                <button value="2" onClick={handleClick}>2</button>
                <button value="3" onClick={handleClick}>3</button>
                <button value="/" onClick={handleClick} className="operator">÷</button>
                <button value="0" onClick={handleClick}>0</button>
                <button value="." onClick={handleClick}>.</button>
                <button value="=" onClick={handleClick} className="eval">=</button>
                <button value="*" onClick={handleClick} className="operator">x</button>
            </div>
        </div>
    );
};

Keyboard.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default Keyboard;