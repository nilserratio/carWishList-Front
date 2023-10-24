import {
  userFavoritesDataMock,
  userInitialStateMock,
} from "../../../mocks/user/userMocks";
import { removeFavoriteCarActionCreator, userReducer } from "../userSlice";

describe("Given a removeFavoriteCar reducer", () => {
  describe("When it recieve a current state and removeFavoriteCar action with favoriteCar id on the payload", () => {
    test("Then it should return a new state of the favoriteCars list", () => {
      const currentUserState = userFavoritesDataMock;
      const newUserDataState = userFavoritesDataMock;
      const expectedFavoriteCars = userInitialStateMock;

      const newUserState = userReducer(
        currentUserState,
        removeFavoriteCarActionCreator(newUserDataState.favoriteCars[0])
      );

      expect(newUserState).toStrictEqual(expectedFavoriteCars);
    });
  });
});
