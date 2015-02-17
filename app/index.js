"use strict";

import React from 'react';
import Logger from './components/Logger';

class App extends Logger {
    componentWillMount () {
        super.componentWillMount();
        console.log('App logging');
    }
    render () {
        return (<div>Hello World!</div>);
    }
}

export default App;