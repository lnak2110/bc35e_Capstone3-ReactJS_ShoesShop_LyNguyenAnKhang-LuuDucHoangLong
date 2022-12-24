import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
    }
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
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });
      const action = loginAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }
}