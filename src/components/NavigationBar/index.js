import { NavigationBar } from "./NavigationBar"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { loginAction } from "../../store/ducks/login-duck";

function mapStateToProps(state) {
    const token = localStorage.getItem("AuthToken", "");
    if (state.login.user.walletAddress) {
        const shortAddressStart = state.login.user.walletAddress.substring(0, 4)
        const shortAddressEnd = state.login.user.walletAddress.substring(state.login.user.walletAddress.length-4, state.login.user.walletAddress.length);
        const walletAddress = shortAddressStart + "..." + shortAddressEnd;
        return {
            token: token,
            user: state.login.user,
            walletAddress: walletAddress
        }
    } else {
        return {
            token: token,
            user: state.login.user,
            walletAddress: ""
        }
    }
    
}

export default withRouter(connect(mapStateToProps, {loginAction})(NavigationBar));