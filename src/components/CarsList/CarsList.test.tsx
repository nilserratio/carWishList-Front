import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import CarsList from "./CarsList";

describe("Given an CarsList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an unordered list of cards with the aria-label text 'list of cars'", () => {
      const text = "list of cars";

      renderWithProviders(<CarsList modelos={[]} nombre="" />);

      const listText = screen.getByLabelText(text);

      expect(listText).toBeInTheDocument();
    });
  });
});
