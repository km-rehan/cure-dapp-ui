//actions
const SHOW_ALERT = "cured-dapp/alert-duck/SHOW_ALERT";
const DISMISS_ALERT = "cured-dapp/alert-duck/DISSMISS_ALERT";

//state
const initialState = {
    isalertOpen: false,
    alertText: "",
    isDismissable: false,
    alertType: ""
}

//reducer
export function alerReducer(state={...initialState}, action) {
    switch(action.type) {
        case SHOW_ALERT:
            console.log("Handler called", action);
            return {
                isalertOpen: action.isalertOpen,
                alertText: action.alertText,
                alertType: action.alertType,
                isDismissable: action.isDismissable
            }
        case DISMISS_ALERT:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

//action creators
export function showAlertAction({ actionText, alertType, isDismissable }) {
    return {
        type: SHOW_ALERT,
        isalertOpen: true,
        alertText: actionText,
        alertType: alertType,
        isDismissable: isDismissable
    }
}

export function dissmissAlert() {
    return {
        type: DISMISS_ALERT
    }
}