import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Results from './Components/Results';
import SearchForm from './Components/SearchForm';


class App extends Component {

    constructor() {
        super();

        this.state = {
            gifs: [],
            loading: true,
            query: '',
        };

    }

    componentDidMount() {
        this.getTrending();
    };

    getTrending = async () => {
        try {
            const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=K1nJukPoyRlKOGE9AWqOO1mh8LEBrjlP&limit=25');
            const {data} = await response.data;

            this.setState({
                gifs: data,
                loading: false,
            })

        } catch (error) {
            console.error(error);
        }

    };

    getRandom = async () => {
        try {
            const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=K1nJukPoyRlKOGE9AWqOO1mh8LEBrjlP');
            const {data} = await response.data;

            this.setState({
                gifs: [data],
                loading: false,
            });

        } catch (error) {
            console.error(error);
        }
    };

    performSearch = async (query = 'retriever', limit = 25) => {

        try {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=K1nJukPoyRlKOGE9AWqOO1mh8LEBrjlP&q=${query}&limit=${limit}`);
            const {data} = await response.data;

            this.setState({
                gifs: data,
                loading: false,
            })

        } catch (error) {
            console.error(error);
        }
    };

    handleSearch = (event) => {
        if (event.target.value === '') return this.getTrending();
        return this.performSearch(event.target.value);
    };


    render() {
        return (
            <Fragment>
                <SearchForm performSearch={this.performSearch} getTrending={this.getTrending}/>
                <div style={{textAlign: 'center', marginBottom: '5vh'}}>
                    <button onClick={this.getTrending}>Get Trending</button>
                    <button onClick={this.getRandom}>Get Random</button>
                </div>

                {
                    (this.state.loading)
                        ? <p style={{color: 'white'}} className="loading">&hellip;loading&hellip;</p> : <Results data={this.state.gifs}/>
                }

            </Fragment>
        );
    }

}


export default App;
