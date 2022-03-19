import React from 'react';
import ReactDOM from 'react-dom';
import MyRootComponent from './root/rootcomponent';

var location = document.getElementById("myroot")

//ReactDOM.render(<MyRootComponent></MyRootComponent>, location)
ReactDOM.render(
    <div>
            <MyRootComponent />
    </div>
, location)