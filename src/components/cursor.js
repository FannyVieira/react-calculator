import React, { Component } from 'react';


class Cursor extends Component{

    render(){
        return(
            <div className="top">
                <div className="screen">{this.props.textScreen}</div>
            </div>
        )
    }
}

export default Cursor;