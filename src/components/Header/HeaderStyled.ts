import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  background-color: ${(prop) => prop.theme.colours.primary};
  min-width: 275px;
  border-bottom: 1px solid ${(prop) => prop.theme.colours.secondaryBackground};

  .header-container {
    &__anchor.active {
      height: 75px;
      width: 213px;
    }

    &__anchor {
      height: 75px;
      width: 213px;
    }

    &__link {
      padding: 14px 28px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colours.quatenary};
      color: ${(props) => props.theme.colours.primary};
    }

    &__button {
      padding: 14px 28px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colours.quinary};
      color: ${(props) => props.theme.colours.primary};
    }
  }
`;

export default HeaderStyled;
