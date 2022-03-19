import React from 'react';
import AddToCart from './cart';
import ProductDescription from './description';
import ProductPhoto from './picture';
import ProductTitle from './title';


class Product extends React.Component {
    //state = {  } 
    render() { 
        return (
            <div>
                <h1> {this.props.sno} </h1>
               
                <ProductTitle pname={this.props.productname}></ProductTitle>
                <ProductPhoto picture={this.props.photo}></ProductPhoto>
                <ProductDescription></ProductDescription>
                <AddToCart></AddToCart>
                <hr></hr>

            </div>
           
        );
    }
}
 
export default Product;