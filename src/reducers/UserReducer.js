import { GET_USERS_SUCCESS, SELECT_USER } from "../actions/ActionTypes";

const INITITAL_STATE = {
    users: [],
    selected: undefined,
};

export default (state = INITITAL_STATE, { type, payload }) => {
    if (type === GET_USERS_SUCCESS) {
        return { ...state, users: payload };
    } else if (type === SELECT_USER) {
        return { ...state, selected: payload };
    }

    return state;
};
