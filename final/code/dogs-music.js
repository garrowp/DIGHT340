import PropTypes from 'prop-types';
import React from 'react';
import navigation from '../assets/navigationData';

const DogsFamous = ({_body, title, data, type}) => (
    <div className="top">
        <main>
            <h1>{type} in Dallas</h1>
            <div>
                <p>{_body}</p>
                {(data !== undefined) ?
                    data.map((dog) => (
                            <div className='dogs-list'>
                                <h2>{dog.name}</h2>
                                <img src={dog.img}/>
                                <p>{dog.text}</p>
                            </div>
                        )
                    )
                    : <p>The content did not load for some reason.</p>
                }
            </div>
        </main>
    </div>
);

export default DogsFamous;
