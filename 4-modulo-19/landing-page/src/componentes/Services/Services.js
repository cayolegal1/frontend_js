import React from 'react';
import  Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ImageUp from '../../img/Icon feather-chevron-up.svg';


const Services = () => {
    return (
   <section className="Services" id="Services-button"> 
          <div className="ImagesContainer">
              <img src={ImageUp} alt="ImageUp" className="Up" />
          </div>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="Button">
                        Sed ut perspiciatis
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias tenetur veniam, magnam
                        voluptatibus ex quidem quas velit consectetur ducimus dolor neque quae nam dignissimos magni ullam?
                        Debitis, dicta consequuntur?Quaerat facere odit fugit possimus distinctio ipsam nemo optio.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className="Button">
                            Ut enim ad minima veniam 
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias tenetur veniam, magnam
                        voluptatibus ex quidem quas velit consectetur ducimus dolor neque quae nam dignissimos magni ullam?
                        Debitis, dicta consequuntur?Quaerat facere odit fugit possimus distinctio ipsam nemo optio.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className="Button">
                            Sit amet, consecteur, adipisci 
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <   Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias tenetur veniam, magnam
                        voluptatibus ex quidem quas velit consectetur ducimus dolor neque quae nam dignissimos magni ullam?
                        Debitis, dicta consequuntur?Quaerat facere odit fugit possimus distinctio ipsam nemo optio.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </section>  
)
}

export default Services;