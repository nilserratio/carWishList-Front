import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../utils/testUtils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it shouls show the Recomotor logo with the alt text 'Recomotor logo'", () => {
      const altText = "Recomotor logo";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
