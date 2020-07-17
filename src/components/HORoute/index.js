import { connect } from "react-redux";
import { HORoute } from "./HORoute";

function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn
    }
}


export default connect(mapStateToProps, {})(HORoute);