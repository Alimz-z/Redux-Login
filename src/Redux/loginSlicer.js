import { createSlice } from "@reduxjs/toolkit";
import userData from "./user.json";

export const counterSlice = createSlice({
  name: "Login",
  initialState: {
    value: false,
    role: "User",
    loginmsg: "",
  },
  reducers: {
    verification: (state, action) => {
      const user = userData.loginCredit.find(
        (user) =>
          user.userName === action.payload.userName &&
          user.passWord === action.payload.passWord
      );
      if (user) {
        state.value = true;
        state.role = user.role;
      } else {
        state.loginmsg = "Invalid username or password.";
      }
    },
  },
});

export const { verification } = counterSlice.actions;
export default counterSlice.reducer;
