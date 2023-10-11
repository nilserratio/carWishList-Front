import { UserStateStructure, UserTokenStructure } from "../store/user/types";
import { UserCredentials } from "../types";

export const userTokenDataMock: UserTokenStructure = {
  id: "646fa090b926156009746913",
  token: "mocked-token",
};

export const userInitialStateMock: UserStateStructure = {
  id: "",
  token: "",
  isLogged: false,
};

export const loginUserDataMock: UserCredentials = {
  username: "011",
  password: "011",
};
