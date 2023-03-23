import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";
import { MdTravelExplore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import './header.css'
const navLinks = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/about",
    display: "About"
  },
  {
    path: "/tours",
    display: "Tours"
  },
];
const Header = () => {
  return  <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <h1 className="text">
                <MdTravelExplore />
                Backpaker
              </h1>
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {navLinks.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active__link': ""}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn primary_btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="primary_btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              <span className="mobile">
                <GiHamburgerMenu/>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  
};

export default Header;
