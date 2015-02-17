"use strict";

import React from 'react';
import Logger from './components/Logger';
import StaticProps from './components/StaticProps';

class App extends Logger {

    componentWillMount () {
        super.componentWillMount();
        console.log('App logging!');
    }

    render () {
        return (
            <div>
                <div>Hello World!</div>
                <StaticProps />
            </div>
        );
    }
}

export default App;