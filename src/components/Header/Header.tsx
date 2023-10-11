import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  picture: string;
  alternativeText: string;
}

const Header = ({ picture, alternativeText }: HeaderProps): JSX.Element => {
  return (
    <HeaderStyled className="header-container">
      <img
        className="header-container__picture"
        src={picture}
        alt={alternativeText}
        width={213}
        height={75}
      />
    </HeaderStyled>
  );
};

export default Header;
