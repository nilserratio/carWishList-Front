import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header-container">
      <img
        className="header-container__picture"
        src="images/recomotor-logo.webp"
        alt="Recomotor logo"
        width={213}
        height={75}
      />
    </HeaderStyled>
  );
};

export default Header;
