import React, {Component, createContext} from 'react';

import Films from './data/star-wars-films.json';

const DEFAULT_STATE={
    allFilms: Films,
    searchTerm: '',
};

export const Context = createContext( DEFAULT_STATE );

export default class Provider extends Component {
    state = DEFAULT_STATE;

    searchTermChanged = (searchTerm) => {
        this.setState({ searchTerm});
    };

    render() {
        return(
            <Context.Provider value={{
                ...this.state,
                searchTermChanged: this.searchTermChanged,
            }}>
                { this.props.children }
            </Context.Provider>
        );
    }
}

