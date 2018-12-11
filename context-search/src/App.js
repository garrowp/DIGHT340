import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid/Grid";

const createMarkup = (rawData=null) => {
    return {
        __html: rawData,
    }
};

const App = ({ films, searchTerm, searchTermChanged }) => {
    return (
     <>

         <TextField
             multiline
             rowsMax="4"
             value={searchTerm}
             onChange={ (e) => searchTermChanged(e.target.value)}
             margin="normal"
             placeholder='Search'
             style={{padding: '25px'}}
         />

         <Grid container justify="center" spacing={16} >
             {
                 films.map((film) => (
                     <Grid key={film.episode_id} item xs={12} style={{padding: '25px'}}>
                         <h2 key={film}>{film.title}</h2>
                         <div dangerouslySetInnerHTML={createMarkup(film.opening_crawl)}/>
                     </Grid>
                 ))
             }
         </Grid>

     </>
    );
};

export default App;
