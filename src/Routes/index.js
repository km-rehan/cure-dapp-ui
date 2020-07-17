import { Routes } from "./Routes";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        loading: state.login.loading
    }
}

export default connect(mapStateToProps, {})(Routes);