import {
  UserFavoritesStructure,
  UserTokenStructure,
} from "../../store/user/types";
import { UserCredentials } from "../../types";

export const decodedTokenMock: Pick<UserTokenStructure, "id"> = {
  id: "652a67fb1ae419782596f55c",
};

export const userTokenDataMock: UserFavoritesStructure = {
  id: "652a67fb1ae419782596f55c",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhNjdmYjFhZTQxOTc4MjU5NmY1NWMiLCJuYW1lIjoiMDExIiwiaWF0IjoxNjk3NDU0Njg1LCJleHAiOjE2OTgwNTk0ODV9.NK8Uah881IzrDuYMHS5w-44EElIYPtMQ39rs9KWCNOc",
  isLogged: true,
  favoriteCars: ["6030b5d7b680ca87b2a1bf10"],
};

export const userInitialStateMock: UserFavoritesStructure = {
  id: "",
  token: "",
  isLogged: false,
  favoriteCars: [],
};

export const userLoggedStateMock: UserFavoritesStructure = {
  id: "1",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhNjdmYjFhZTQxOTc4MjU5NmY1NWMiLCJuYW1lIjoiMDExIiwiaWF0IjoxNjk3NDU0Njg1LCJleHAiOjE2OTgwNTk0ODV9.NK8Uah881IzrDuYMHS5w-44EElIYPtMQ39rs9KWCNOc",
  isLogged: true,
  favoriteCars: ["6030b5d7b680ca87b2a1bf10"],
};

export const loginUserDataMock: UserCredentials = {
  username: "011",
  password: "011",
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhNjdmYjFhZTQxOTc4MjU5NmY1NWMiLCJuYW1lIjoiMDExIiwiaWF0IjoxNjk3NDU0Njg1LCJleHAiOjE2OTgwNTk0ODV9.NK8Uah881IzrDuYMHS5w-44EElIYPtMQ39rs9KWCNOc";

export const invalidLoginUserDataMock: UserCredentials = {
  username: "",
  password: "",
};

export const userFavoritesDataMock: UserFavoritesStructure = {
  id: "",
  token: "",
  isLogged: false,
  favoriteCars: ["6030b5d7b680ca87b2a1bf10"],
};
