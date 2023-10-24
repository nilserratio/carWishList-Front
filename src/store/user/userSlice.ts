import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserFavoritesStructure } from "../user/types";

const initialUserState: UserFavoritesStructure = {
  id: "",
  token: "",
  isLogged: false,
  favoriteCars: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserState: UserFavoritesStructure,
      action: PayloadAction<UserFavoritesStructure>
    ): UserFavoritesStructure => ({
      ...action.payload,
      isLogged: true,
      favoriteCars: currentUserState.favoriteCars,
    }),

    logoutUser: (): UserFavoritesStructure => ({
      ...initialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
