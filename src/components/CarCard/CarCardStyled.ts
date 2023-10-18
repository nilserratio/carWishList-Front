import styled from "styled-components";

const CarCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid;
  border-color: ${(props) => props.theme.colours.secondaryBackground};
  border-width: 1px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colours.primary};

  .car-card {
    &__image {
      border-radius: 8px 8px 0 0;
      object-fit: cover;
    }

    &__information {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 22px;
      gap: 16px;
    }

    &__information > h2 {
      font-size: 26px;
    }
  }
`;

export default CarCardStyled;
