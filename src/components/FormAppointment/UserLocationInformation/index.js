import { UserLocationInformation } from "./UserLocationInformation";
import { connect } from "react-redux";
import { getUserProfileAction } from "../../../store/ducks/profile-duck";

function mapStateToProps(state) {
    return {
        profile: state.profile.profileData,
        token: state.login.token
    }
}

export default connect( mapStateToProps, { getUserProfileAction } )(UserLocationInformation);