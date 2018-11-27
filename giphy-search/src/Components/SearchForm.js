import React, { Component } from 'react';

export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.performSearch(this.refs.query.value);
    };

    onSearchChange = (e) => {
        this.setState({
            searchText: e.target.value,
        });
    };

    render() {
        return (
            <form className='search-form' onSubmit={this.handleSubmit}>
                <label htmlFor="gif-search">Search Giphy</label>
                <input
                    type='search'
                    name='gif-search'
                    onChange={this.onSearchChange}
                    ref="query"
                />
                <button>Go</button>
            </form>
        );
    }
}
