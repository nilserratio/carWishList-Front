import { screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { loginUserDataMock } from "../../mocks/user/userMocks";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import LoginForm from "./LoginForm";

beforeAll(() => vi.clearAllMocks());

describe("Given a LoginForm component", () => {
  const mockOnSubmit = vi.fn();
  const signInText = "Sign in";
  const usernameText = "Username or userID";
  const passwordText = "Password";
  const usernameInputText = "011";
  const passwordInputText = "011";

  describe("When it's rendered", () => {
    test("Then it should show form fields text 'Username or userID' and 'Password'", () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const usernameTextField = screen.getByLabelText(usernameText);
      const passwordTextField = screen.getByLabelText(passwordText);

      expect(usernameTextField).toBeInTheDocument();
      expect(passwordTextField).toBeInTheDocument();
    });

    test("Then it should show a button with the test 'Sign in'", () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const signInButton = screen.getByRole("button", { name: signInText });

      expect(signInButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered but the inputs fields username and password are empty", () => {
    test("Then it should show a disable button with the text 'Sign in'", () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const signInButton = screen.getByRole("button", { name: signInText });

      expect(signInButton).toBeDisabled();
    });
  });

  describe("When it's rendered and the user types '011' in the username and password text field", () => {
    test("Then it should show '011' in the username field", async () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const usernameTextField = screen.getByLabelText(usernameText);

      await userEvent.type(usernameTextField, usernameInputText);

      expect(usernameTextField).toHaveValue(usernameInputText);
    });

    test("Then it should show '011' in the password field", async () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const passwordTextField = screen.getByLabelText(passwordText);

      await userEvent.type(passwordTextField, passwordInputText);

      expect(passwordTextField).toHaveValue(passwordInputText);
    });

    test("Then it should show the button enabled", async () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const signInButton = screen.getByRole("button", { name: signInText });

      await userEvent.type(
        screen.getByLabelText(usernameText),
        usernameInputText
      );
      await userEvent.type(
        screen.getByLabelText(passwordText),
        passwordInputText
      );

      expect(signInButton).toBeEnabled();
    });
  });

  describe("When it's rendered and the user types '011' in the username and password text field and clicks the submit button", () => {
    test("Then it should call the onSubmitUserData function with the user credentials provideds", async () => {
      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const usernameTextField = screen.getByLabelText(usernameText);
      const passwordTextField = screen.getByLabelText(passwordText);
      const signInButton = screen.getByRole("button", { name: signInText });

      await userEvent.type(passwordTextField, passwordInputText);
      await userEvent.type(usernameTextField, usernameInputText);
      await userEvent.click(signInButton);

      expect(mockOnSubmit).toBeCalledWith(loginUserDataMock);
    });
  });
});
