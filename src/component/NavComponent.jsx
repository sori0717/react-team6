import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = (props) => {

    function handleName(name) {
        return () => {
            props.setName(name);
        };
    }
    
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <LinkContainer to="/seongyu">
                    <Nav.Link onClick={handleName("이선규")}>Quiz1</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/sumi">
                    <Nav.Link onClick={handleName("송수미")}>Quiz2</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/kichan">
                    <Nav.Link onClick={handleName("김기찬")}>Quiz3</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/mingi">
                    <Nav.Link onClick={handleName("정민기")}>Quiz4</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    );
};

export default NavbarComponent;