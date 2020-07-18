import { NavigationBar } from "./NavigationBar"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { loginAction, logoutAction } from "../../store/ducks/login-duck";
import { getImage } from "../../store/ducks/profile-duck";
import imageAvatar from "../../resources/icons/img_avatar.png";

function mapStateToProps(state) {

    return {
        isLoggedIn: state.login.isLoggedIn,
        profile: state.login.profile,
        profileImage: state.profile.image ? state.profile.image : imageAvatar
    }
}

export default withRouter(connect(mapStateToProps, {loginAction, logoutAction, getImage })(NavigationBar));

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