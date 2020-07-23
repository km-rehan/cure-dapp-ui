import { AppointmentDoctors } from "./AppointmentDoctors"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn
    }
}

export default withRouter(connect(mapStateToProps, {})(AppointmentDoctors));