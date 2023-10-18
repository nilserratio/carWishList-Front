import styled from "styled-components";

const CarsListStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  .carsList-container {
    &__brand {
      padding: 16px;
    }

    &__tittle {
      padding-bottom: 16px;
      font-size: 1.5rem;
    }

    &__model-list {
      display: flex;
      flex-direction: row;
      gap: 20px;

      @media (max-width: 900px) {
        flex-direction: column;
      }
    }
  }
`;

export default CarsListStyled;
