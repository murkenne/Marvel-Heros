import React from 'react';
import { Button, Card, Image, Container } from 'react-bootstrap';


function Homepage() {
    return (
        <Container className="text-center p-4" style={{ backgroundColor: '#f8f9fa', color: '#343a40', border: '1px solid #dee2e6', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Image src="https://www.slashfilm.com/img/gallery/everything-we-know-about-x-men-97-so-far/l-intro-1658533890.jpg" fluid className="mb-4" style={{ borderRadius: '8px' }} />
            <h1>Welcome to Our Store</h1>
            <p>Explore our range of products and find what you need!</p>
            <Button variant="primary" size="lg" className="shadow mb-4">Shop Now</Button>
            <Card className="mx-auto" style={{ maxWidth: '500px', border: '1px solid #dee2e6', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body>
                    <Card.Title>Featured Product</Card.Title>
                    <Card.Text>Check out our latest arrivals and exclusive deals!</Card.Text>
                    <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Homepage;
