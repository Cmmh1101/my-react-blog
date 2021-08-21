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
    <div>
      <Navbar className="nav p-0" expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <img src="" alt="logo" />
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
                <Link to="/articles-list">Articles</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
