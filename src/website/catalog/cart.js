import React from 'react';


class AddToCart extends React.Component {
    //state = {  } 
    constructor(props){
        super(props)
        this.state = {
            count:8,
            quantityState: parseInt(this.props.qty)
        }
    }

    changeQuantity = ()=>{
        console.log("changeQuantity called!!!!")
        //this.state.count = this.state.count + 1
        this.setState({
            quantityState: this.state.quantityState + 1
        })
    }
    
    render() { 
        return (
            <div>
                <button>Add To Cart</button> 
                <br></br><br></br>
                <button onClick={this.changeQuantity}>Add Quantity</button>
                Quantity: {this.state.quantityState}
                <button>Remove Quantity</button>
                <h1>State: {this.state.count}</h1>
            </div>
        );
    }
}
 
export default AddToCart;