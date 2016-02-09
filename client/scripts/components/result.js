import React from 'react'

import { Col, Glyphicon, Row } from 'react-bootstrap';

import repositories from '../api/repositories'

export default React.createClass({
    displayName: 'Result',

    propTypes: {
        name: React.PropTypes.string,
        owner: React.PropTypes.string,
        language: React.PropTypes.string,
        stars: React.PropTypes.number,
        avatarUrl: React.PropTypes.string
    },

    render() {
        return (
            <Row>
                <Col md={1}>
                    <img src={this.props.avatarUrl} />
                </Col>
                <Col md={8}>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.owner}</h4>
                </Col>
                <Col md={3}>
                    <div className="language">{this.props.language}</div>
                    <div className="stars">
                        <Glyphicon glyph="star" />
                        {this.props.stars}
                    </div>
                </Col>
            </Row>
        )
    }
});