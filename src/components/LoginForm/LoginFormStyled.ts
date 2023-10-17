import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  max-width: 600px;

  .login-container {
    &__control {
      display: flex;
      flex-direction: column;
      padding-bottom: 26px;
      gap: 10px;
    }

    &__control > input {
      padding: 16px;
      border: solid;
      border-color: ${(props) => props.theme.colours.tertiary};
      border-radius: 12px;
      background-color: ${(props) => props.theme.colours.primary};
    }

    &__submit {
      padding: 16px 32px;
      margin-top: 20px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colours.secondary};
      color: ${(props) => props.theme.colours.primary};

      :disabled {
        color: ${(props) => props.theme.colours.secondary};
        background-color: transparent;
        border: 3px solid;
        font-weight: bold;
      }
    }
  }
`;

export default LoginFormStyled;
