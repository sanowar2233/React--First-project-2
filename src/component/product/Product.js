import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    

    const {name, img, seller, ratings,price}=props.product
  
    
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p>price : {price}</p>
            <p><small>seller: {seller}</small></p>
            <p><small>Rattings: {ratings} star</small></p>
            <button onClick={()=>props.handleAddToCartClick(props.product)}  className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>


            </button>
           
        </div>
    );
};

export default Product;