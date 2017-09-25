import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Cursor = (props) => {
    const { textScreen } = props;
    return(
        <div className="top">
            <div className="screen">{ textScreen }</div>
        </div>
    );
};

Cursor.propTypes = {
    textScreen: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
};

export default Cursor;