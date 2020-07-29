import { DoctorApplication } from "./DoctorApplication";
import {
    getUserProfileAction
} from "../../store/ducks/profile-duck";

function mapStateToProps(state) {
    return {
        token: state.login.token,
        user: state.login.user,
        profile: state.profile.profileData,
        profileError: state.profile.profileError,
    }
}

export default connect(mapStateToProps, { getUserProfileAction })(DoctorApplication);