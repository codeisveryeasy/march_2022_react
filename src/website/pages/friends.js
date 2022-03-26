import React from 'react';
import SingleFriend from './friend';

class Friends extends React.Component {
    //state = {  } 
    constructor(props){
        super(props)
        this.state = {
            allfriends:[
                {
                    id:1,
                    name:"OBB",
                    location: "Chennai",
                    likes: 4
                },
                {
                    id:2,
                    name:"Mua",
                    location: "Mandi",
                    likes: 7
                },
                {
                    id:3,
                    name:"Chi",
                    location: "China",
                    likes: 9
                },
                {
                    id:4,
                    name:"Kia",
                    location: "Korea",
                    likes: 2
                },
                {
                    id:5,
                    name:"Ovo",
                    location: "Japan",
                    likes: 13
                }
            ]
        }
    }

    componentWillMount(){
        console.log(this.state.allfriends)
        console.log("Length of array: " + this.state.allfriends.length);
    }

    addLikes=(id)=>{
        console.log("Add 1 to likes for id: " + id)
        this.state.allfriends.map(f=>{
            if(f.id === id){
                f.likes++
            }
        })
        console.log(this.state.allfriends)
        //use setState to update changes in state value
        this.setState({
            allfriends:this.state.allfriends
        })

    }

    displayAllFriends=()=>{
        return this.state.allfriends.map((f) => {
            // console.log(f)
            // console.log(f.name)
            return (
                // <li key={f.id}>{f.name}, {f.location}</li>
                <SingleFriend
                        key={f.id}
                        name={f.name}
                        loc={f.location}
                        id={f.id}
                        likes={f.likes}
                        changeCheers={this.addLikes}
                >

                </SingleFriend>
            )
        } )
    }

    render() { 
        return (
            <div>
                <h1>Friends</h1>
                <div>
                    <ol>
                        {this.displayAllFriends()}
                        {/* <li>{this.state.allfriends[0].name}</li>
                        <li>{this.state.allfriends[1].name}</li>
                        <li>{this.state.allfriends[2].name}</li>
                        <li>{this.state.allfriends[3].name}</li> */}
                    </ol>
                </div>
            </div>
        );
    }
}
 
export default Friends;