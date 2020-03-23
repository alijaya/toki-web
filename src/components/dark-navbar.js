import Link from "../components/link";
import React from "react";
import { Nav, Navbar as BNavbar } from "react-bootstrap";
import logo from "../img/LogoTOKINav.png";
import "./dark-navbar.scss";
import { color } from "../config";
import url from "../urls";

const NavLink = props => (
  <Link
    cover
    direction="down"
    bg={color.grey4}
    className="nav-link"
    {...props}
  />
);

const DarkNavbar = ({ location }) => {
  return (
    <BNavbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className={`toki-navbar dark-navbar`}
    >
      <Link
        paintDrip
        hex={color.grey1}
        className="navbar-brand"
        to={url.HOME}
        disabled={location.pathname === url.HOME}
      >
        <img
          src={logo}
          width="45"
          height="45"
          className="d-inline-block align-top"
          alt="Logo TOKI"
        />
      </Link>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavLink to={url.HOME} disabled={location.pathname === url.HOME}>
            HOME
          </NavLink>
          <NavLink
            to={url.HALL_OF_FAME}
            disabled={location.pathname === url.HALL_OF_FAME}
          >
            HALL OF FAME
          </NavLink>
          <NavLink to={url.HOME} disabled={location.pathname === url.HOME}>
            CALENDAR
          </NavLink>
          <NavLink
            to={url.DOWNLOADS}
            disabled={location.pathname === url.DOWNLOADS}
          >
            DOWNLOADS
          </NavLink>
          <NavLink to={url.HOME} disabled={location.pathname === url.HOME}>
            CONTACTS
          </NavLink>
        </Nav>
      </BNavbar.Collapse>
    </BNavbar>
  );
};
export default DarkNavbar;
