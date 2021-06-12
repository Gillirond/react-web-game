import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Clock from "./Clock";

export default function NavPanel() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="../../../../public/tod_512.png"
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top"/>
                {' '}Home
            </Navbar.Brand>
            <Clock/>
            <Nav className="ml-auto justify-content-end">
                <Nav.Link href="/rules">Rules</Nav.Link>
                <Nav.Link href="/authors">Authors</Nav.Link>
            </Nav>
        </Navbar>
    )
}