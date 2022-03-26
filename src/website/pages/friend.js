import React from 'react';


class SingleFriend extends React.Component {
    //state = {  } 
    addCheers=()=>{
        console.log("Cheers with id " + this.props.id + " clicked!!!!")
        this.props.changeCheers(this.props.id)
    }
    render() { 
        return (
            <li style={{padding:"5px"}}>
                {this.props.name}, {this.props.loc}
                &nbsp;
                <button onClick={this.addCheers}>Cheers {this.props.likes}</button> 
                &nbsp;
                @ {this.props.id}
            </li>
        );
    }
}
 
export default SingleFriend;