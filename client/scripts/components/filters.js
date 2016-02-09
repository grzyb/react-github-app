import React from 'react'

import { Col, Input, Row } from 'react-bootstrap';

export default React.createClass({
    displayName: 'Filters',

    propTypes: {
        language: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired
    },

    handleChange() {
        let value = this.refs.langInput.getValue();
        this.props.onChange(value);
    },

    render() {
        return (
            <Row>
                <Col md={4}>
                    <Input type="select" onChange={this.handleChange} ref="langInput"
                           value={this.props.language} addonBefore="Lange">
                        <option></option>
                        <option>C++</option>
                        <option>Java</option>
                        <option>JavaScript</option>
                        <option>Python</option>
                        <option>Ruby</option>
                    </Input>
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                </Col>
            </Row>
        )
    }
});