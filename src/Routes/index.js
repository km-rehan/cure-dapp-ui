import { Routes } from "./Routes";
import { connect } from "react-redux";
import { logoutAction } from "../store/ducks/login-duck";

function mapStateToProps(state) {
    return {
        token: state.login.token,
        user: state.login.user
    }
}

export default connect(mapStateToProps, { logoutAction })(Routes);