import React from 'react';

class ProductTitle extends React.Component {
    //state = {  } 
    render() { 
        return (
            <h4>{this.props.pname}</h4>
        );
    }
}
 
export default ProductTitle;