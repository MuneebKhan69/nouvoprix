import React, { Component } from 'react';
import { LOADER_FALSE, LOADER_TRUE, } from '../constants';

class LoaderAction extends Component {

    static LoaderTrue() {
        return { type: LOADER_TRUE };
    }

    static LoaderFalse() {
        return { type: LOADER_FALSE };
    }

}

export default LoaderAction;