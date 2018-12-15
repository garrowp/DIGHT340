import PropTypes from 'prop-types';
import React from 'react';
import navigation from '../assets/navigationData';

const Sports = ({_body, title, data, type}) => (
    <div className="top">
        <main>
            <h1>{type} in Dallas</h1>
            <div>
                <p>{_body}</p>
                {(data !== undefined) ?
                    data.map((sport) => (
                            <div className='sports-list'>
                                <h2>{sport.name}</h2>
                                <img src={sport.img}/>
                                <p>{sport.text}</p>
                            </div>
                        )
                    )
                    : <p>The content did not load for some reason.</p>
                }
            </div>
        </main>
    </div>
);

export default Sports;
