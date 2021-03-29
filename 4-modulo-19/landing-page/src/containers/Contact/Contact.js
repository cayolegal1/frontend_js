import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ContactImage from '../../img/contact-image.png'

const functionOnChange = () => {
    return (
        console.log('FUNCIONA')
    )
}

const functionOnSubmit = () => {
    return(
        console.log('Se envio')
    )
}


const Contact = () => {
return (
    <section className="Contact">
        <Container>
            <Row>
                <Col md={12} lg={5}>
                    <h3 className="TitleContact">
                       Get in touch <br/>
                       <span className="TitleContact-span"> We are hiring! </span> 
                    </h3>
                </Col>
                <Form className="ContactForm" onSubmit={functionOnSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" name="name" onChange={functionOnChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="Email" name="email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="phone" placeholder="Phone" name="phone" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Message" name="message" className="textarea" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit" className="ButtonSend">
                        Send
                    </Button>
                </Form>
                <Col md={12} lg={5}>
                <img src={ContactImage} alt="Contact Image" className="d-block w-100 imagen " />
                </Col>
            </Row>
        </Container>
    </section>    
)
}

export default Contact;