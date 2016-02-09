import React from 'react';
import Search from './search';
import Results from './results';

import repositories from '../api/repositories';

export default React.createClass({
    displayName: 'App',

    getInitialState() {
        return {
            query: ''
        }
    },

    handleSearch(query) {
        this.setState({query});
    },

    render() {
        return (
            <div className="app">
                <h1>Super Fancy Github Searcher</h1>
                <Search placeholder="Was suchen Sie?" buttonLabel="Such!"
                        onSubmit={this.handleSearch}
                />
                <Results query={this.state.query} />
            </div>
        );
    }
});
