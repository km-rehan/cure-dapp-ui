import { NavigationBar } from "./NavigationBar"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { loginAction } from "../../store/ducks/login-duck";

function mapStateToProps(state) {
    const token = localStorage.getItem("AuthToken", "");
    return {
        token: token,
        user: state.login.user
    }
}

export default withRouter(connect(mapStateToProps, {loginAction})(NavigationBar));