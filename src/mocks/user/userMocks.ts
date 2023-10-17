import { UserStateStructure, UserTokenStructure } from "../../store/user/types";
import { UserCredentials } from "../../types";

export const decodedTokenMock: Pick<UserTokenStructure, "id"> = {
  id: "652a67fb1ae419782596f55c",
};

export const userTokenDataMock: UserTokenStructure = {
  id: "652a67fb1ae419782596f55c",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhNjdmYjFhZTQxOTc4MjU5NmY1NWMiLCJuYW1lIjoiMDExIiwiaWF0IjoxNjk3NDU0Njg1LCJleHAiOjE2OTgwNTk0ODV9.NK8Uah881IzrDuYMHS5w-44EElIYPtMQ39rs9KWCNOc",
};

export const userInitialStateMock: UserStateStructure = {
  id: "",
  token: "",
  isLogged: false,
};

export const userLoggedStateMock: UserStateStructure = {
  id: "1",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJhNjdmYjFhZTQxOTc4MjU5NmY1NWMiLCJuYW1lIjoiMDExIiwiaWF0IjoxNjk3NDU0Njg1LCJleHAiOjE2OTgwNTk0ODV9.NK8Uah881IzrDuYMHS5w-44EElIYPtMQ39rs9KWCNOc",
  isLogged: true,
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
