import React from 'react';
import PropTypes from 'prop-types';

const center={
    textAlign: 'center',
    fontVariant: 'small-caps',
    margin: '15px',
};

const gridItem = {
    display:'block',
    margin:'auto',
    marginTop: '15px',
};

const style={
    backgroundColor: 'grey',
    borderRadius: '5px',
};

const Gif = (props) => (
    <div style={style}>
        <a style={center} href={props.link}><img style={gridItem} src={props.src} alt="" /></a>
        <p style={center}>{props.label}</p>
    </div>
);

Gif.propTypes = {
    src: PropTypes.string,
};

export default Gif;