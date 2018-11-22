import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif'
import NoGifs from './NoGifs';

const Results = props => (
    <div className='search-results'>
        {
            (props.data.length) ? props.data.map(gif => {
                return <Gif src={gif.images.fixed_height.url} key={gif.id}/>
            })
            : <NoGifs/>
        }
    </div>
);

Results.propTypes = {
    data:PropTypes.array,
};

export default Results;