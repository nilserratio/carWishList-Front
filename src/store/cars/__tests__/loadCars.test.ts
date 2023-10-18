import { carsMock } from "../../../mocks/cars/carsMocks";
import { carsReducer, loadCarsActionCreator } from "../carsSlice";
import { CarsStateStructure } from "../types";

describe("Given a loadACars reducer", () => {
  describe("When it recieves an empty list of cars and a loadCars action with 2 cars", () => {
    test("Then it should return a new state with the 2 animals", () => {
      const expetedCarsState: CarsStateStructure = {
        marcas: carsMock,
      };

      const currentCarsState: CarsStateStructure = {
        marcas: [],
      };

      const newCarState: CarsStateStructure = carsReducer(
        currentCarsState,
        loadCarsActionCreator(carsMock)
      );

      expect(newCarState).toStrictEqual(expetedCarsState);
    });
  });
});
