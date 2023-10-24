import { renderHook } from "@testing-library/react";
import useUser from "../useUser";
import { decodedTokenMock } from "../../../mocks/user/userMocks";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { carMock } from "../../../mocks/cars/carsMocks";
import { vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a useUser custom hook with removeFromFavorites function", () => {
  const _id = decodedTokenMock.id;
  const carId = carMock.id;

  describe("When the function removeFromFavorites is called with a user ID and a car ID", () => {
    test("Then it should return the message 'Car eliminated from favorites'", async () => {
      server.resetHandlers(...handlers);
      const expectedMessage = undefined;

      const {
        result: {
          current: { removeFromFavorites },
        },
      } = renderHook(() => useUser());

      const messageResponse = await removeFromFavorites(carId, _id);

      expect(messageResponse).toBe(expectedMessage);
    });
  });

  describe("When the function removeFromFavorites is called with an invalid data", () => {
    test("Then it should return the response's method with an error with 401 status code", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { removeFromFavorites },
        },
      } = renderHook(() => useUser());

      const rejectResponse = removeFromFavorites(carId, _id);

      expect(rejectResponse).rejects.toThrowError();
    });
  });
});
