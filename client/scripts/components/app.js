import React from 'react';
import { Grid } from 'react-bootstrap';

import Filters from './filters';
import Results from './results';
import Search from './search';

import repositories from '../api/repositories';

export default React.createClass({
    displayName: 'App',

    getInitialState() {
        return {
            query: '',
            language: ''
        }
    },

    handleSearch(query) {
        this.setState({query});
    },

    handleFilterChange(language) {
        this.setState({language});
    },

    render() {
        return (
            <Grid>
                <h1>Super Fancy Github Searcher</h1>
                <Search placeholder="Was suchen Sie?" buttonLabel="Such!"
                        onSubmit={this.handleSearch} />
                <Filters onChange={this.handleFilterChange} language={this.state.language} />
                <Results query={this.state.query} language={this.state.language} />
            </Grid>
        );
    }
});
