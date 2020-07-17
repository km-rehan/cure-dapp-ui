import { Account } from "./Account";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps, {})(Account);