import { renderHook } from "@testing-library/react";
import useCars from "../useCars";
import { carsMock } from "../../../mocks/cars/carsMocks";

describe("Given a getCars fucntion", () => {
  describe("When it's called", () => {
    test("Then it should return a list on cars", async () => {
      const {
        result: {
          current: { getCars },
        },
      } = renderHook(() => useCars());

      const cars = await getCars();

      const expectedCars = carsMock;

      expect(cars).toStrictEqual(expectedCars);
    });
  });
});
