import { connect } from "react-redux";
import { HORoute } from "./HORoute";

function mapStateToProps(state) {
    return {
        user: state.login.user,
        isLoggedIn: state.login.isLoggedIn,
    }
}


export default connect(mapStateToProps, {})(HORoute);