import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, img, price, shipping } = props.product;
    console.log(props.product);
    return (
        <div className='review-item'>
            <div className="review-img-container">
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <h4>Name: {name}</h4>
                    <p>price: ${price}</p>
                    <p><small>Shipping charge:{shipping}</small></p>
                </div>
                <div className="delete-button">
                    <button onClick={() => props.handleDeleteBtn(props.product)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;