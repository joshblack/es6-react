"use strict";

import React from 'react';

// const App = React.createClass({
//     render () {
//         return <div>Hello World!!</div>;
//     }
// });

class App extends React.Component {
    render () {
        return (<div>Hello World!</div>);
    }
}


React.render(<App />, document.body);