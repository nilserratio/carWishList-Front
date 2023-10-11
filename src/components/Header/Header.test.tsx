import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import { screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a picture with an alternative text that says 'Recomotor logo'", () => {
      const expectedAlternativeText = "Recomotor logo";

      renderWithProviders(wrapWithRouter(<Header />));

      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });
});
