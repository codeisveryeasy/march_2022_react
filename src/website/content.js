import React from 'react';
import Product from './catalog/product';


class Content extends React.Component {
   
    render() { 
        return (
            <div> 
                <h1>Content</h1>
                <Product sno="8" 
                        productname="Galaxy Note 22" 
                        photo="https://picsum.photos/200?random=1">
                </Product>  
                <Product sno="9" 
                        productname="Jio Phone"
                        photo="https://picsum.photos/200?random=2" >
                </Product>  
                <Product sno="13" 
                        productname="360 Drone" 
                        photo="https://picsum.photos/200?random=3">
                </Product>
                <Product sno="17" 
                        productname="Digital Break Sensor" 
                        photo="https://picsum.photos/200?random=4">
                </Product>
                
            </div>
           
        );
    }
}
 
export default Content;