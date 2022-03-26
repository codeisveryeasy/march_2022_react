import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Content from '../pages/catalog/content';
import Contact from '../pages/contact';
import Friends from '../pages/friends';
import Home from '../pages/home';


class Container extends React.Component {
    //state = {  } 
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path='/catalog' element={<Content></Content>}></Route>
                    <Route path='/friends' element={<Friends></Friends>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>

                </Routes>
            </div>
        );
    }
}

export default Container;
