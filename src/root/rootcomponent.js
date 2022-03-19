// 1. class way (class based components)
// 2. function way (function based components) -> hooks

// till react 15.3 -> class based comp creation was pre-Dominant

// post react 15.3 -> function way took Over. You use hooks.

import React from 'react';
import Content from '../website/content';
import Header from '../website/header';

import Sidebar from '../website/sidebar';


class MyRootComponent extends React.Component {


    render() {

        let headerStyle = {
            border: "2px solid blue",
            borderRadius: "5px"
        }

        let sidebarStyle = {
            border: "2px solid green",
            borderRadius: "5px",
            width:"20%"
        }

        let contentStyle = {
            border: "2px solid orange",
            borderRadius: "5px",
            //width:"70%"
            flex:1,
            overflow:"auto"
        }

        let container = {
            display:"flex"
        }

        return (
            <div>
                <div style={headerStyle}>
                    <Header></Header>
                </div>
                <div style={container}>
                    <div style={sidebarStyle}>
                        <Sidebar></Sidebar>
                    </div>
                    <div style={contentStyle}>
                        <Content></Content>
                    </div>
                </div>


            </div>
        );
    }
}

export default MyRootComponent