import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  http,
  setCookie,
  setStoreJson,
  TOKEN,
  USER_LOGIN,
} from '../../utils/config';

const initialState = {
  newUser: {},
  userLogin: null,
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    registerAction: (state, action) => {
      state.newUser = action.payload;
    },
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { registerAction, loginAction } = userReducer.actions;

export default userReducer.reducer;

export const registerApi = (newUserData) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        'https://shop.cyberlearn.vn/api/Users/signup',
        newUserData
      );
      console.log(result);
      const action = registerAction(result.data.content);

      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await http.post(`/api/Users/signin`, userLogin);

    try {
      const action = loginAction(result.data.content);
      dispatch(action);

      setStoreJson(USER_LOGIN, result.data.content);
      setCookie(TOKEN, result.data.content.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProfileApi = () => {
  return async (dispatch) => {
    let result = await http.post(`/api/Users/getProfile`);
    console.log(result);
    //Sau khi call api profile đưa lên reducer
    // const action = getProfileAction(result.data.content);
    // dispatch(action);
  };
};
