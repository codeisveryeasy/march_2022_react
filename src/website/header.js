import React from 'react';


class Header extends React.Component {
    //state = {  } 

    //inline styling
    duration = 12
    render() {
        return (
            <div>
                <h1 style={{
                    color: "red",
                    backgroundColor: "pink",
                    border: "1px solid purple",
                    borderRadius: "10px"
                }}
                >Learn React in {this.duration} hours!!!!
                </h1>
                <h1 style={{color:"goldenrod"}}>Logo</h1>
            </div>
        );
    }
}

export default Header;