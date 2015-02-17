"use strict";

const React = require('react');

const App = React.createClass({
    render () {
        return (<div>Hello World!</div>);
    }
});


React.render(<App />, document.body);