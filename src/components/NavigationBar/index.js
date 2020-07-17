import { NavigationBar } from "./NavigationBar"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { loginAction, logoutAction } from "../../store/ducks/login-duck";

function mapStateToProps(state) {

    return {
        isLoggedIn: state.login.isLoggedIn
    }
}

function isEmptyValues(value){
    return  value === undefined ||
            value === null ||
            (typeof value === "object" && Object.keys(value).length === 0) ||
            (typeof value === "string" && value.trim().length === 0)
  }

export default withRouter(connect(mapStateToProps, {loginAction, logoutAction })(NavigationBar));

// if (state.login.user.walletAddress) {
    //     const shortAddressStart = state.login.user.walletAddress.substring(0, 4)
    //     const shortAddressEnd = state.login.user.walletAddress.substring(state.login.user.walletAddress.length-4, state.login.user.walletAddress.length);
    //     const walletAddress = shortAddressStart + "..." + shortAddressEnd;
    //     return {
    //         token: token,
    //         user: state.login.user,
    //         walletAddress: walletAddress
    //     }
    // } else {
    //     return {
    //         token: token,
    //         user: state.login.user,
    //         walletAddress: ""
    //     }
    // }