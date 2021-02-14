import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Property = ( {property} ) => {
    return (
        
            <Card className='my-3 p-1 rounded'>
                <Link to={`/property/${property._id}`} >
                    <Card.Img src={property.image} variant='top' height="200" />
                    </Link>
                <Card.Body>
                    <Link to={`/property/${property._id}`}>
                        <Card.Title as='h1'><strong>{property.location}</strong></Card.Title>
                    </Link>

                <Card.Text as='div'>
                   <Rating value={property.rating} text={`${property.numReviews} reviews`} />
                </Card.Text>    

                <Card.Text as='h3'>Rs. {property.rent}

                </Card.Text>

                </Card.Body>
            </Card>
                
        
    )
}

export default Property;
 