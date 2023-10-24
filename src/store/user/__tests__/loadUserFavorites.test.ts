import {
  userNotFavoritesDataMock,
  userTokenDataMock,
} from "../../../mocks/user/userMocks";
import { loadUserFavoritesActionCreator, userReducer } from "../userSlice";

describe("Given a loadUserFavorites reducer", () => {
  describe("When it recieve a current state and loadUserFavorites action with the user favorites car list on the payload", () => {
    test("Then it should return a new state with the favoriteCars property actualized", () => {
      const currentUserState = userNotFavoritesDataMock;
      const newUserDataState = userTokenDataMock;
      const expectedFavorites = userTokenDataMock.favoriteCars;

      const newUserState = userReducer(
        currentUserState,
        loadUserFavoritesActionCreator(newUserDataState.favoriteCars)
      );

      expect(newUserState.favoriteCars).toStrictEqual(expectedFavorites);
    });
  });
});
