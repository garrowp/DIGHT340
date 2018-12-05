import React, { Component } from 'react';

export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            limit: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.refs.query.value === '') this.props.getTrending();
        else this.props.performSearch(this.refs.query.value, this.refs.limit.value);
    };

    onSearchChange = (e) => {
        this.setState({
            searchText: e.target.value,
        });
    };

    onLimitChange = (e) => {
        this.setState({
            limit: e.target.value,
        })
    };

    render() {
        return (
            <form style={{textAlign: 'center', marginTop: '10vh', marginBottom: '5vh'}} className='search-form' onSubmit={this.handleSubmit}>
                <label htmlFor="gif-search" style={{color: 'red', fontWeight: '900'}}>Search Giphy </label>
                <input
                    type='search'
                    name='gif-search'
                    onChange={this.onSearchChange}
                    ref="query"
                    placeholder='search gifs...'
                />

                <input
                    type='input'
                    name='limit'
                    onChange={this.onLimitChange}
                    ref="limit"
                    placeholder='How many gifs?'
                />

                {/*<input*/}
                {/*type='range'*/}
                {/*name='limit'*/}
                {/*min='1'*/}
                {/*max='100'*/}
                {/*onChange={this.onLimitChange}*/}
                {/*ref="limit"*/}
                {/*/>*/}

                <button>Go</button>
            </form>
        );
    }
}
