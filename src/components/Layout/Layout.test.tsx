import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a image with the alternative text 'Recomotor logo'", () => {
      const expectedAlternativeText = "Recomotor logo";

      renderWithProviders(wrapWithRouter(<Layout />));

      const text = screen.getByRole("img", { name: expectedAlternativeText });

      expect(text).toBeInTheDocument();
    });
  });
});
