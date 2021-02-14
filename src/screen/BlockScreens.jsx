import React, { useState, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import Property from '../components/Property.jsx';
import axios from 'axios';

const BlockScreens = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const {data} = await axios.get('api/properties')
            
            setProperties(data)
        }
       
        fetchProperties();
    
    }, [])

   
    return (
        <div>
        
           <h1>Featured Properties</h1> 
           <div className="blockImage">
           <Row >
                {properties.map(property => (
                    <Col key={property._id} sm={12} md={6} lg={4}>
                        <Property property={property}/>
                    </Col>
                ))}
           </Row>
           </div>
           </div>
       
    )
};

export default BlockScreens;
