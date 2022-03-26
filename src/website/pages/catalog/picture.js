import React from 'react';

class ProductPhoto extends React.Component {
    //state = {  } 
    render() { 
        return (
            <div>
               <img src={this.props.picture} alt="something"></img>
            </div>
        );
    }
}
 
export default ProductPhoto;