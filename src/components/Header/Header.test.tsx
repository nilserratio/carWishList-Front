import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import { screen } from "@testing-library/react";
import Header from "./Header";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../utils/paths/paths";
import App from "../App/App";
import Homepage from "../../pages/Homepage/Homepage";
import userEvent from "@testing-library/user-event";
import LoginPage from "../../pages/LoginPage/LoginPage";

describe("Given a Header component", () => {
  const expectedAlternativeText = "Recomotor logo";

  describe("When it is rendered", () => {
    test("Then it should show a picture with an alternative text that says 'Recomotor logo'", () => {
      renderWithProviders(wrapWithRouter(<Header />));

      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clicks the Recomotor logo", () => {
    test("Then it should redirect the user to the home page", async () => {
      const route: RouteObject[] = [
        {
          path: paths.root,
          element: <App />,
        },
        {
          path: paths.home,
          element: <Homepage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const adroLogo = screen.getByAltText(expectedAlternativeText);
      await userEvent.click(adroLogo);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });

  describe("When it's rendered and the user clicks the 'Sign In' link", () => {
    test("Then it should redirect the user to the login page", async () => {
      const expectedText = "Sign In";

      const route: RouteObject[] = [
        {
          path: paths.root,
          element: <App />,
        },
        {
          path: paths.login,
          element: <LoginPage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const signInLink = screen.getByText(expectedText);
      await userEvent.click(signInLink);

      expect(router.state.location.pathname).toStrictEqual(paths.login);
    });
  });
});
