import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  background-color: ${(props) => props.theme.colours.quatenary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 100px 20px;

  .notFound-container {
    &__text {
      color: ${(props) => props.theme.colours.primary};
      font-size: 2.5rem;
      font-weight: bold;
    }

    &__title {
      color: ${(props) => props.theme.colours.primary};
      font-size: 1.2rem;
      font-weight: bold;
    }

    &__button {
      padding: 16px 32px;
      margin-top: 10px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colours.secondary};
      color: ${(props) => props.theme.colours.primary};
      max-width: 400px;
      width: 100%;
    }
  }
`;

export default NotFoundPageStyled;
