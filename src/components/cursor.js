import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cursor extends Component{ 
    render(){
        return(
            <div className="top">
                <div className="screen">{this.props.textScreen}</div>
            </div>
        )
    }
}
Cursor.propTypes = {
    textScreen: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
};

export default Cursor;