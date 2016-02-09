import React from 'react'

import repositories from '../api/repositories'

export default React.createClass({
    displayName: 'Results',

    propTypes: {
        query: React.PropTypes.string
    },

    getInitialState() {
        return {
            items: []
        }
    },

    componentWillReceiveProps(nextProps) {
        repositories(nextProps.query).end()
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
            .catch(error => console.log('FUCK THIS SHIT!', error));
    },

    render() {
        let results = this.state.items.map((item, index) => {
            let { name, owner, language, avatarUrl, stars } = item;
            let key = `result-${index}`;
            return (
                <li key={key}>
                    <div>{name}</div>
                    <div>{owner}</div>
                    <div>{language}</div>
                    <div>{avatarUrl}</div>
                    <div>{stars}</div>
                </li>
            );
        });

        return (
            <ul>
                {results}
            </ul>
        )
    }
});