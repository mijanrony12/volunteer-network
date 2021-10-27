import React from 'react';
import './Work.css'
import { Button, Card } from 'react-bootstrap';

const Work = ({ work }) => {
    const { name, image } = work;
    return (
        <div className="col-md-3 img-size">
               <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                      <Card.Body>
                        <div className="btn-design">
                               <Button>{name}</Button>
                        </div>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Work;