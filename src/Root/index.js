import { Root } from "./Root";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        loading: state.login.loading
    }
}

export default connect(mapStateToProps, {})(Root);