import { carsMock } from "../../../mocks/cars/carsMocks";
import { carsReducer, empltyCarsActionCreator } from "../carsSlice";
import { CarsStateStructure } from "../types";

describe("Given a emptyCars reducer", () => {
  describe("When it recieves an list of cars and a emptyCars action", () => {
    test("Then it should return a new state with an empty list of cars", () => {
      const expetedCarsState: CarsStateStructure = {
        marcas: [],
      };

      const currentCarsState: CarsStateStructure = {
        marcas: carsMock,
      };

      const newCarState: CarsStateStructure = carsReducer(
        currentCarsState,
        empltyCarsActionCreator()
      );

      expect(newCarState).toStrictEqual(expetedCarsState);
    });
  });
});
