import React, { Component, Fragment } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();

    this.state = {
      gifs: [],
    };

  }

  componentDidMount() {
         // this.getTrendingGifs();
         this.searchGifs('golden retriever');
    };

  getTrendingGifs= () => {
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=K1nJukPoyRlKOGE9AWqOO1mh8LEBrjlP')
          .then(response => {
              this.setState({
                  gifs: response.data.data,
              })
          })
          .catch(error => {
              console.error(('Error fetching trending data: ', error))
          })
  };

  searchGifs = (query = 'react') => {
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=K1nJukPoyRlKOGE9AWqOO1mh8LEBrjlP&q=${query}&limit=25`)
          .then(response => {
              this.setState({
                  gifs: response.data.data,
              })
          })
          .catch(error => {
              console.error(('Error fetching search data: ', error))
          })
  };


  render() {
    return (
      <Fragment>
          {
            this.state.gifs.map((gif) => {
              return <img key={gif.id} alt={gif.title} src={gif.images.original.url}/>
            })
          }
      </Fragment>
    );
  }
}

export default App;
