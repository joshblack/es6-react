"use strict";

import React from 'react';

class StaticProps extends React.Component {

    constructor (props) {
        this.state = {
            count: props.initialCount
        }
    }

    increment () {
        this.setState({
            count: this.state.count + 1
        });
    }

    render () {
        return (
            <div>
                <button onClick={this.increment.bind(this)}>Count: { this.state.count }</button>
            </div>
        );
    }
}

// Just properties of the constructor
// getDefaultProps
StaticProps.defaultProps = { initialCount: 0 };

// propTypes
StaticProps.propTypes = { initialCount: React.PropTypes.number };

export default StaticProps;