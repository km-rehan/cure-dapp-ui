import React from "react";
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


export class  NavigationBar extends React.Component {

    state = {
        ...initialState
    }

    toggle = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    componentDidMount() {
        if (this.props.token) {
            this.props.getUserProfileAction(this.props.token)
            this.props.getImage(this.props.profile.avatar, this.props.token);
        }
    }

    scrollToPosition = (event, element) => {
        event.preventDefault()
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -99
        });
    }

    goHome = (event) => {
        event.preventDefault();
        this.props.history.push("/")
    }

    connectToWallet = (e) => {
        e.preventDefault()
        window.open("https://eraswap.life", "", "width=1003,height=650")
        window.onload = function () {
            window.opener.postMessage("loaded", "*")
        }
        window.addEventListener('message', (e) => {
            //SHOULD BE UNCOMMENTED BELOW FUNCTION IN PRODUCTION
            const data = e.data;
            this.props.loginAction(data)
        }, false);

        window.onclose = function () {
            window.removeEventListener('message', function (e) {}, false)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
            this.props.getUserProfileAction();
            if (this.props.profile) {
                this.props.getImage(this.props.profile.avatar, this.props.token);
            }
        }
    }

    handleHomeButtonClick = (e) => {
        e.preventDefault();
        console.log("this.props.history", this.props.history.location);
        const { location } = this.props.history;
        if (location.pathname !== "/") {
            this.props.history.push("/")
        } else  {
            this.scrollToPosition(e, "top");
        }
    }

    render() {
        const {
            isLoggedIn,
            profileImage,
            logoutAction,
            token
        } = this.props;

        console.log("token", token)


        return (
            <Navbar light fixed="top" expand="md">
                <NavbarBrand onClick={this.goHome}>
                    <Image source={logoImage} styleClass="header-logo" alt="Era swap logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} onClick={this.handleHomeButtonClick}>Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle className="custom-dropdown-toggle" nav dropdown>
                                Our products
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={Link} to="/products/appointment">
                                    Doctors Appointment
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/products/tracker">
                                    Fitness tracker
                                </DropdownItem>
                                <DropdownItem tag={Link} to="/products/pharmacy">
                                    Pharmacy
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink tag={Link} onClick={(e) => this.scrollToPosition(e, "about_us")}>
                                About us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} onClick={(e) => this.scrollToPosition(e, "blogs")}>
                                Blogs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} onClick={(e) => this.scrollToPosition(e, "white_paper")}>
                                White paper
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav pills>
                        <NavItem>
                            {
                                !isLoggedIn
                                ? (
                                    <NavLink tag={Link} onClick={this.connectToWallet} className="connect-wallet-button">
                                        Connect to wallet
                                    </NavLink>
                                )
                                : (
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav dropdown>
                                        <Image styleClass="nav-avatar" source={profileImage} alt="avatar" />
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


}