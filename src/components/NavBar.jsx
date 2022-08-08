import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
    const styles = {
        textDecoration: "none",
        width: "90%",
        display: "flex",
        justifyContent: "space-between"
    }
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Link to="/"><img src="./img/home.png" alt="home" style={{borderRadius: "100px", width: "5vw", margin: "0 10px"}} /></Link>
            <Nav className="me-auto" style={styles}>
                <Link to="/category/trucker" style={styles}> TRUCKER</Link>
                <Link to="/category/flat" style={styles}> FLAT</Link>
                <Link to="/category/semiflat" style={styles}> SEMI-FLAT</Link>
                <Link to="/checkout" style={styles}> CHECKOUT</Link>
                <Link to="/cart" style={styles}> CART</Link>
            <CartWidget />
            </Nav>
            </Container>
        </Navbar>
        </>
    )}