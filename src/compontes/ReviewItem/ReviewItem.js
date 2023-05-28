import React from 'react';

import '../ReviewItem/ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ReviewItem({ singleProduct,handelRemoveItem }) {

    const {id, name, price,shipping, quantity, img } = singleProduct;

    return (
        <div className='review-item'>
            <div className='image-div'>
                <img src={img} alt="" />
            </div>

            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Shpping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handelRemoveItem(id)} className='button-delete'>
                        <FontAwesomeIcon icon={faTrashAlt} className='delete-icon'></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem