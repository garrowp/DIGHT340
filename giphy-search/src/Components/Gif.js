import React from 'react';
import PropTypes from 'prop-types';

const Gif = (props) => (

    <img src={props.src} alt="" />

);

Gif.propTypes = {
    src: PropTypes.string,
};

export default Gif;