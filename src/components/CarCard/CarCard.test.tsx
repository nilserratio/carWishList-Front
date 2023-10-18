import { screen } from "@testing-library/react";
import { carBrandMock, carMock } from "../../mocks/cars/carsMocks";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import CarCard from "./CarCard";

describe("Given a CarCard component", () => {
  describe("When it's rendered and recieve a 'Arona' car information", () => {
    test("Then it should render a card with the text 'Arona' inside a heading", () => {
      const carName = "Arona";

      renderWithProviders(<CarCard modelo={carMock} marca={carBrandMock} />);

      const cardHeading = screen.getByRole("heading", { name: carName });

      expect(cardHeading).toBeInTheDocument();
    });
  });
});
