import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
    displayName: 'Search',

    propTypes: {
        onSubmit: React.PropTypes.func.isRequired
    },

    handleSearch() {
        let value = ReactDOM.findDOMNode(this.refs.mainInput).value;
        this.props.onSubmit(value);
    },

    render() {
        return(
            <div>
                <input type="text" ref="mainInput" placeholder={this.props.placeholder} />
                <button onClick={this.handleSearch}>{this.props.buttonLabel}</button>
            </div>
        );
    }
})