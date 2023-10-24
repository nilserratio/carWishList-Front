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

describe("Given a useUser custom hook with addToFavorites function", () => {
  const _id = decodedTokenMock.id;
  const carId = carMock.id;

  describe("When the function addToFavorites is called with a user ID and a car ID", () => {
    test("Then it should return the message 'Car added to favorites'", async () => {
      server.resetHandlers(...handlers);
      const expectedMessage = undefined;

      const {
        result: {
          current: { addToFavorites },
        },
      } = renderHook(() => useUser());

      const messageResponse = await addToFavorites(carId, _id);

      expect(messageResponse).toBe(expectedMessage);
    });
  });

  describe("When the function getToken is called with an invalid user credentials", () => {
    test("Then it should return the response's method with an error with 401 status code", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { addToFavorites },
        },
      } = renderHook(() => useUser());

      const rejectResponse = addToFavorites(carId, _id);

      expect(rejectResponse).rejects.toThrowError();
    });
  });
});
