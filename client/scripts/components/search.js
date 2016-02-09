import React from 'react';
import { Button, Input } from 'react-bootstrap';

export default React.createClass({
    displayName: 'Search',

    propTypes: {
        onSubmit: React.PropTypes.func.isRequired
    },

    handleSearch(event) {
        event.preventDefault();
        let value = this.refs.mainInput.getValue();
        this.props.onSubmit(value);
    },

    render() {
        let submitButton = <Button type="submit" onClick={this.handleSearch}>{this.props.buttonLabel}</Button>;
        return(
            <form onSubmit={this.handleSearch}>
                <Input type="text" ref="mainInput" placeholder={this.props.placeholder} buttonAfter={submitButton} />
            </form>
        );
    }
})