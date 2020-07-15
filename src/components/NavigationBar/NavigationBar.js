import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
    Collapse, Navbar, 
    NavLink, NavItem, 
    NavbarBrand, 
    NavbarToggler, UncontrolledDropdown,
    DropdownToggle, DropdownMenu,
    DropdownItem, Nav
  } from "reactstrap";

import logoImage from "../../resources/icons/curelogo.png"

import Image from "../Image";

import "./NavigationBar.css";

import { scroller } from "react-scroll";

const initialState = {
    isOpen: false
}

export function NavigationBar({  token, user, history, loginAction }) {

    const [state, setState] = useState({ ...initialState });

    const toggle = (event) => {
        event.preventDefault();
        setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    const scrollToPosition = (event, element) => {
        event.preventDefault()
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -99
        });
    }

    const goHome = (event) => {
        event.preventDefault();
        history.push("/")
    }

    const connectToWallet = (e) => {
        e.preventDefault()
        window.open("https://eraswap.life", "", "width=1003,height=650")
        window.onload = function () {
            window.opener.postMessage("loaded", "*")
        }
        window.addEventListener('message', function (e) {
            //SHOULD BE UNCOMMENTED BELOW FUNCTION IN PRODUCTION
            const data = e.data;
            loginAction(data)
        }, false);
        
    }

    return (
        <Navbar light fixed="top" expand="md">
            <NavbarBrand onClick={goHome}>
                <Image source={logoImage} styleClass="header-logo" alt="Era swap logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/home">Home</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav dropdown>
                            Our products
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag={Link} to="/products/distributor">
                                Distributor
                            </DropdownItem>
                            <DropdownItem tag={Link} to="/products/manufacturer">
                                Manufacturer
                            </DropdownItem>
                            <DropdownItem tag={Link} to="/products/patient">
                                Patient
                            </DropdownItem>
                            <DropdownItem tag={Link} to="/products/pharmacy">
                                Pharmacy
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink tag={Link} onClick={(e) => scrollToPosition(e, "about_us")}>
                            About us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} onClick={(e) => scrollToPosition(e, "blogs")}>
                            Blogs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} onClick={(e) => scrollToPosition(e, "white_paper")}>
                            White paper
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav pills>
                    <NavItem>
                        <NavLink tag={Link} onClick={connectToWallet} className="connect-wallet-button">
                            Connect to wallet
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}