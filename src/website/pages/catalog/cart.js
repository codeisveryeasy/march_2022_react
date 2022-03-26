import React from 'react';


class AddToCart extends React.Component {
    //state = {  } 
    constructor(props){
        super(props)
        console.log(typeof this.props.qty)
        this.state = {
            count:8,
            quantityState: parseInt(this.props.qty)
        }
    }

    addQuantity = ()=>{
        console.log("changeQuantity called!!!!")
        console.log("Current value:" + this.state.quantityState)
        //this.state.changeQuantity = this.state.changeQuantity + 1
        
        //this.state.count = this.state.count + 1
        this.setState({
            quantityState: this.state.quantityState + 1
        })
        console.log("New value:" + this.state.quantityState)
    }

    removeQuantity=()=>{
        console.log("removeQuantity called!!!!")
        this.setState({
            quantityState: this.state.quantityState - 1
        })
    }
    
    render() { 
        return (
            <div>
                <button>Add To Cart</button> 
                <br></br><br></br>
                <button onClick={this.addQuantity}>Add Quantity</button>
                Quantity: {this.state.quantityState}
                <button onClick={this.removeQuantity}>Remove Quantity</button>
                <h1>State: {this.state.count}</h1>
            </div>
        );
    }
}
 
export default AddToCart;