import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const PropertyScreen = ( {match} ) => {
    const [property, setProperty] = useState([])

    useEffect(() => {
        const fetchProperty = async () => {
            const {data} = await axios.get(`/api/properties/${match.params.id}`)
            
            setProperty(data)
        }
       
        fetchProperty();
    
    }, [match])

    return (
        <div>
            <Link className='btn btn-dark my-3' to='/'> Go Back </Link>
            <Row>
                <Col md={6} >
                    <Image src={property.image} alt={property.location} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                    <ListGroup.Item >
                        <h2>{property.location}</h2>
                    </ListGroup.Item>
                   
                    <ListGroup.Item >
                        <Rating value={property.rating} text={`${property.numReviews}  reviews`}/>
                    </ListGroup.Item>
                    
                    <ListGroup.Item >
                        Rent: Rs.{property.rent}
                    </ListGroup.Item>
                    <ListGroup.Item >
                        Description: {property.description}
                    </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item >
                        <Button className='btn-black' type='button' disabled={property.availability === 0}>
                            Bookmark 
                        </Button> 
                    </ListGroup.Item> 
                </ListGroup>
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PropertyScreen;
