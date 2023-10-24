import { screen } from "@testing-library/react";
import { carBrandMock, carMock } from "../../mocks/cars/carsMocks";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import CarCard from "./CarCard";
import userEvent from "@testing-library/user-event";

describe("Given a CarCard component", () => {
  describe("When it's rendered and recieve a 'Arona' car information", () => {
    test("Then it should render a card with the text 'Arona' inside a heading", () => {
      const carName = "Arona";

      renderWithProviders(
        <CarCard modelo={carMock} marca={carBrandMock} isFavorite={false} />
      );

      const cardHeading = screen.getByRole("heading", { name: carName });

      expect(cardHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and recieve a 'Arona' car information that is a favorite car", () => {
    test("Then it should render a button with the text 'Remove from favorites'", () => {
      const buttonText = "Remove from favorites";

      renderWithProviders(
        <CarCard modelo={carMock} marca={carBrandMock} isFavorite={true} />
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's rendered and recieve a 'Arona' car information that isn't a favorite car, and the user clicks the button 'Add to favorites'", () => {
    test("Then it should add the car 'Arona' to the favorites list", async () => {
      const buttonText = "Add to favorites";

      renderWithProviders(
        <CarCard modelo={carMock} marca={carBrandMock} isFavorite={false} />
      );

      const AddToFavoritesbutton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(AddToFavoritesbutton);

      expect(AddToFavoritesbutton).toBeInTheDocument();
    });
  });

  describe("When it's rendered and recieve a 'Arona' car information that is a favorite car, and the user clicks the button 'Remove from favorites'", () => {
    test("Then it should add the car 'Arona' to the favorites list", async () => {
      const buttonText = "Remove from favorites";

      renderWithProviders(
        <CarCard modelo={carMock} marca={carBrandMock} isFavorite={true} />
      );

      const AddToFavoritesbutton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(AddToFavoritesbutton);

      expect(AddToFavoritesbutton).toBeInTheDocument();
    });
  });
});
