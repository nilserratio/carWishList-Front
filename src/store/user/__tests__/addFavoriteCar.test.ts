import {
  userFavoritesDataMock,
  userInitialStateMock,
  userTokenDataMock,
} from "../../../mocks/user/userMocks";
import { addFavoriteCarActionCreator, userReducer } from "../userSlice";

describe("Given a addFavoriteCar reducer", () => {
  describe("When it recieve a current state and addFavoriteCar action with favoriteCars list on the payload", () => {
    test("Then it should return a new state of the favoriteCars list", () => {
      const currentUserState = userInitialStateMock;
      const newUserDataState = userTokenDataMock;
      const expectedFavoriteCars = userFavoritesDataMock;

      const newUserState = userReducer(
        currentUserState,
        addFavoriteCarActionCreator(newUserDataState.favoriteCars[0])
      );

      expect(newUserState).toStrictEqual(expectedFavoriteCars);
    });
  });
});
