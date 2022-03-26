import React from 'react';


class Lifecycle extends React.Component {

    //1st life cycle method
    constructor(props) {
        super(props)
        console.log("constructor is the first one!")
        alert("constructor is first!")
        this.state = {
            likes: 8
        }
    }

    //2nd lifecycle method
    componentWillMount() {
        console.log("inside component will mount");
        alert("inside component will mount")
    }

    //4th lifecycle method
    componentDidMount() {
        console.log("inside component did mount");
    }

    addLike = ()=>{
        this.setState({
            likes: this.state.likes + 1
        })
    }

    //5th lifecycle method
    componentWillUpdate(){
        console.log("component will update")
        alert("component will updated." + this.state.likes)
    }

      //6th lifecycle method
      componentDidUpdate(){
        console.log("component just updated")
        alert("component just updated." + this.state.likes)
    }

    //3rd lifecycle method
    render() {
        return (
            <div>
                <h1>Lifecycle</h1>
                <h2>Likes: {this.state.likes}</h2>
                <button onClick={this.addLike}>Add Like</button>
            </div>

        );
    }
}

export default Lifecycle;