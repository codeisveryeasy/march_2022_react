import React from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {

    render() {
        return (
            <div>
                <h1>Sidebar</h1>
                <div>
                    <Link to="/">Home</Link>
                    <br></br>
                    <Link to="/catalog">Catalog</Link>
                    <br></br>
                    <Link to="/friends">Friends</Link>
                    <br></br>
                    <Link to="/contact">Contact</Link>
                    <br></br>
                    <Link to="/lifecycle">Lifecycle</Link>
                </div>
            </div>
        );
    }
}

export default Sidebar;