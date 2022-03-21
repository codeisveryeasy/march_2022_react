import React from 'react';
import Product from './catalog/product';


class Content extends React.Component {
   
    render() { 
        return (
            <div> 
                <h1>Content</h1>
                <Product sno="8" 
                        productname="Samsung Galaxy Note 22" 
                        photo="https://picsum.photos/200?random=1"
                        quantity = "1">
                </Product>  
                <Product sno="9" 
                        productname="Jio Phone"
                        photo="https://picsum.photos/200?random=2" 
                        quantity = "10">
                </Product>  
                <Product sno="13" 
                        productname="360 Drone" 
                        photo="https://picsum.photos/200?random=3"
                        quantity = "100">
                </Product>
                <Product sno="17" 
                        productname="Digital Break Sensor" 
                        photo="https://picsum.photos/200?random=4"
                        quantity = "1000">
                </Product>
                
            </div>
           
        );
    }
}
 
export default Content;