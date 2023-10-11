import { screen } from "@testing-library/react";
import { vi } from "vitest";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../utils/testUtils/testUtils";

describe("Given a LoginForm component", () => {
  const mockOnSubmit = vi.fn();

  describe("When it's rendered", () => {
    test("Then it should show two labels with a placeholder text 'Username or userID' and 'Password'", () => {
      const usernameText = "Username or userID";
      const passwordText = "Password";

      renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

      const usernameLabelText = screen.getByLabelText(usernameText);
      const passwordLabelText = screen.getByLabelText(passwordText);

      expect(usernameLabelText).toBeInTheDocument();
      expect(passwordLabelText).toBeInTheDocument();
    });
  });

  test("Then it should show a button with the test 'Sign in'", () => {
    const signInText = "Sign in";

    renderWithProviders(<LoginForm actionOnSubmit={mockOnSubmit} />);

    const signInButton = screen.getByRole("button", { name: signInText });

    expect(signInButton).toBeInTheDocument();
  });
});
