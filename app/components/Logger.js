"use strict";

import React from 'react';

class Logger extends React.Component {
    componentWillMount () {
        console.log('Mounting!');
    }
}

export default Logger;