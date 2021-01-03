import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "counter",
  initialState: {
    user: { uid: "", photoUrl: "", displayName: "" },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: "", photoUrl: "", displayName: "" };
    },
    updateUserProfile: (state, action) => {
      state.user.displayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;

// userSliceのreducerオブジェクトのuserのこと
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
