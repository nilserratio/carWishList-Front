import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  background-color: ${(prop) => prop.theme.colours.primary};
  min-width: 275px;

  .header-container {
    &__anchor.active {
      height: 75px;
      width: 213px;
    }

    &__anchor {
      height: 75px;
      width: 213px;
    }
  }
`;

export default HeaderStyled;
