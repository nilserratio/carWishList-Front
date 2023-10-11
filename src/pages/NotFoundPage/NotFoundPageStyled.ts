import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  background-color: ${(props) => props.theme.colours.quatenary};
  display: flex;
  flex-direction: column;
  align-items: center;

  .notFound-container {
    padding: 32px 22px;
    position: absolute;
    top: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;

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
