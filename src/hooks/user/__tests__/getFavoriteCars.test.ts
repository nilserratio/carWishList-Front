import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { server } from "../../../mocks/server";
import { errorHandlers } from "../../../mocks/handlers";
import useUser from "../useUser";
import { userTokenDataMock } from "../../../mocks/user/userMocks";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a getFavoriteCars fucntion", () => {
  describe("When it's called with an user id", () => {
    test("Then it should return the favorite cars list of that user", async () => {
      const {
        result: {
          current: { getFavoriteCars },
        },
      } = renderHook(() => useUser());

      const selectedUser = await getFavoriteCars(
        userTokenDataMock.id as string
      );

      const expectedFavoriteList = userTokenDataMock.favoriteCars;

      expect(selectedUser).toStrictEqual(expectedFavoriteList);
    });
  });

  describe("When it's called with an user id but can't find the id", () => {
    test("Then it should return the response's method with an error with 401 status code", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getFavoriteCars },
        },
      } = renderHook(() => useUser());

      const rejectResponse = getFavoriteCars(userTokenDataMock.id as string);

      expect(rejectResponse).rejects.toThrowError();
    });
  });
});
