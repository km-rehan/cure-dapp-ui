import { NavigationBar } from "./NavigationBar"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { loginAction, logoutAction } from "../../store/ducks/login-duck";
import { getImage, getUserProfileAction } from "../../store/ducks/profile-duck";
import imageAvatar from "../../resources/icons/img_avatar.png";

function mapStateToProps(state) {

    return {
        user: state.login.user,
        token: state.login.token,
        profile: state.profile.profileData,
        isLoggedIn: state.login.isLoggedIn,
        profileImage: state.profile.image ? state.profile.image : imageAvatar
    }
}

export default withRouter(connect(mapStateToProps, {loginAction, logoutAction, getImage, getUserProfileAction })(NavigationBar));