import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const AppNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">NLP App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          {/* <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/alexander-w-ross/mern-shop">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};
export default AppNavBar;
