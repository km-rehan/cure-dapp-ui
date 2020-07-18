import React, { useEffect, useState } from "react";
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

export function NavigationBar({  isLoggedIn, history, profile, loginAction, logoutAction, getImage, profileImage }) {

    const [state, setState] = useState({ ...initialState });

    useEffect(() => {
        if (profile) {
            getImage(profile.avatar);
        }
        return () => {

        }
    }, [profile, getImage])

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

        window.onclose = function() {
            window.removeEventListener('message', function(e) {
            }, false)
        }
        
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
                        <DropdownToggle className="custom-dropdown-toggle" nav dropdown>
                            Our products
                        </DropdownToggle>
                        <DropdownMenu className="custom-dropdown-menu" right>
                            <DropdownItem className="custom-dropdown-item" tag={Link} to="/products/distributor">
                                Distributor
                            </DropdownItem>
                            <DropdownItem className="custom-dropdown-item" tag={Link} to="/products/manufacturer">
                                Manufacturer
                            </DropdownItem>
                            <DropdownItem className="custom-dropdown-item" tag={Link} to="/products/patient">
                                Patient
                            </DropdownItem>
                            <DropdownItem className="custom-dropdown-item" tag={Link} to="/products/pharmacy">
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
                        {
                            !isLoggedIn
                            ? (
                                <NavLink tag={Link} onClick={connectToWallet} className="connect-wallet-button">
                                    Connect to wallet
                                </NavLink>
                              )
                            : (
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav dropdown>
                                       <Image styleClass="nav-avatar" source={profileImage} />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem tag={Link} to="/account">
                                            Account
                                        </DropdownItem>
                                        <DropdownItem tag={Link} to="/wallet"> 
                                            Wallet
                                        </DropdownItem>
                                        <DropdownItem tag={Link} onClick={logoutAction}>
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                              )
                        }
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}