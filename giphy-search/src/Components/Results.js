import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif'
import NoGifs from './NoGifs';

const searchResultsStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridTemplateRows: 'auto',
    gridGap: '15px',
    justifyContent: 'center',
    alignItems: 'center',
};

const Results = props => (
    <div className='search-results' style={searchResultsStyles}>
        {
            (props.data.length) ? props.data.map(gif => {
                return <Gif label={gif.title} src={gif.images.fixed_width.url} link={gif.images.preview_gif.url} key={gif.id}/>
            })
            : <NoGifs/>
        }
    </div>
);

Results.propTypes = {
    data:PropTypes.array,
};

export default Results;