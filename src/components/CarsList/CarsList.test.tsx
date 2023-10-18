import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import CarsList from "./CarsList";
import { carsBrandMock, carsMock } from "../../mocks/cars/carsMocks";

describe("Given an CarsList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an unordered list of cards with the aria-label text 'list of cars'", () => {
      const text = "list of cars";

      renderWithProviders(<CarsList key={""} />);

      const listText = screen.getByLabelText(text);

      expect(listText).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a list of 2 cars", () => {
    test("Then it should the text 'Arona' inside a heading", () => {
      const carsList = carsMock;
      const carName = carsBrandMock[0].nombre;

      renderWithProviders(<CarsList />, {
        cars: { marcas: carsList },
      });

      const heading = screen.getByRole("heading", { name: carName });

      expect(heading).toBeInTheDocument();
    });
  });
});
