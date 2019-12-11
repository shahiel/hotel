import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

export default function Room({room}) {
    const {name, slug, images, price } = room;
    return (
        <article>
        <div className="img-container">
           <img src={images[0] || defaultImg/**If a image fails to load defaultImg will replace it */} 
           alt="single room"/>
           <div className="price-top">
               <h6>R{price}</h6>{/**Display the price */}
               <p>per night</p>
           </div>
           {/**when user clicks on item it will redirect*/}
           <Link to={`/rooms/${slug}`}//Slug is the text that will show in url bar instead of a id number
           className="btn-primary room-link">
           Features
           </Link>
           </div>
           <p className="room-info">{name}</p>{/**room name */}
        </article>
    )
}

Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired

    })
}