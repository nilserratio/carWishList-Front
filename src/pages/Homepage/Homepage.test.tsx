import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import Homepage from "./Homepage";

describe("Given a Homepage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Recomotor favorite cars' inside a heading", () => {
      const headingText = "Recomotor favorite cars";

      renderWithProviders(wrapWithRouter(<Homepage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
