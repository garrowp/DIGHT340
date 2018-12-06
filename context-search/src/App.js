import React from 'react';
import './App.css';

const App = ({ films, searchTerm, searchTermChanged }) => {
    return (
     <>
         {
             films.map((film) => {
                 return <h2 key={film}>{film.title}</h2>
             })
         }
     </>
    );
};

export default App;
