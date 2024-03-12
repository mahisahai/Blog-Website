import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  const headerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "10px 0",
  };

  const brandStyle = {
    textDecoration: "none",
    color: "red",
  };

  const buttonStyle = {
    backgroundColor: "lightblue", // Change button background color
    color: "black", // Change button text color
    textDecoration: "none",
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={headerStyle}>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={brandStyle}>
              React Blog Assignment
            </Link>
          </Navbar.Brand>
          <Button type="button" variant="light" style={buttonStyle}>
            <Link to="/add-blog" style={{ textDecoration: "none" }}>
              New Post
            </Link>
          </Button>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
