import LoginPage from "./LoginPage";
import { screen } from "@testing-library/react";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import { paths } from "../../utils/paths/paths";
import Homepage from "../Homepage/Homepage";

describe("Given a LoginPage page component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Sign in' inside a heading", () => {
      const headingText = "Sign in";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user clicks the 'Sign in' button", () => {
    test("Then it should log in the user and redirects him to the '/home' path", async () => {
      const usernameText = "Username or userID";
      const passwordText = "Password";
      const usernameInputText = "011";
      const passwordInputText = "011";
      const buttonText = "Sign in";

      const route: RouteObject[] = [
        {
          path: paths.root,
          element: <LoginPage />,
        },
        {
          path: paths.home,
          element: <Homepage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const usernameTextField = screen.getByLabelText(usernameText);
      const passwordTextField = screen.getByLabelText(passwordText);
      const loginButton = screen.getByRole("button", { name: buttonText });

      await userEvent.type(usernameTextField, usernameInputText);
      await userEvent.type(passwordTextField, passwordInputText);
      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });
});
