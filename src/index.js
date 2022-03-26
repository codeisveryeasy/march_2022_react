import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MyRootComponent from './root/rootcomponent';

var location = document.getElementById("myroot")

//ReactDOM.render(<MyRootComponent></MyRootComponent>, location)
ReactDOM.render(
    <HashRouter>
        <div>
            <MyRootComponent />
        </div>
    </HashRouter>
    , location)