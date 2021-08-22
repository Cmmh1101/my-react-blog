import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="nav" expand="sm" dark>
        <div className="container p-0">
          <NavbarBrand href="/" className="logo-container">
            <img src="../images/logobrand.png" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav tag="ul" className="mr-auto" navbar>
              <NavItem tag="li">
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem tag="li">
                <Link to="/about">About</Link>
              </NavItem>
              <NavItem tag="li">
                <Link tag="a" to="/articles-list">
                  Blog
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
