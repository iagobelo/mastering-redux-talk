import axios from 'axios';
import { GET_USERS_SUCCESS, SELECT_USER } from './ActionTypes';

const USERS_URL = 'https://api.github.com/users';

export const getUsers = () => async (dispatch) => {
    const { data } = await axios.get(USERS_URL);
    dispatch({ type: GET_USERS_SUCCESS, payload: data });
};

export const selectUser = (user, navigation) => (dispatch) => {
    dispatch({ type: SELECT_USER, payload: user });
    navigation.navigate('UserInfo');
};
