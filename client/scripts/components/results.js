import React from 'react';

import Result from './result';

import repositories from '../api/repositories';

export default React.createClass({
    displayName: 'Results',

    propTypes: {
        query: React.PropTypes.string,
        language: React.PropTypes.string
    },

    getInitialState() {
        return {
            items: []
        }
    },

    componentWillReceiveProps(nextProps) {
        repositories(nextProps.query).withLanguage(nextProps.language).end()
            .then(response => {
                let items = response.items.map(item => {
                    return {
                        name: item.name,
                        owner: item.owner.login,
                        language: item.language,
                        avatarUrl: item.owner.avatar_url,
                        stars: item.stargazers_count
                    }
                });
                this.setState({items});
            })
            .catch(error => {
                console.log('FUCK THIS SHIT!', error);
            });
    },

    render() {
        let results = this.state.items.map((item, index) => {
            let { name, owner } = item;
            let key = `result-${index}-${owner}-${name}`;
            return (
                <Result key={key} {...item} />
            );
        });

        return (
            <div className="results">
                {results}
            </div>
        )
    }
});