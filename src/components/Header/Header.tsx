import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
import { paths } from "../../utils/paths/paths";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header-container">
      <NavLink to={paths.home} className="header-container__anchor">
        <img
          className="header-container__picture"
          src="images/recomotor-logo.webp"
          alt="Recomotor logo"
          width={213}
          height={75}
        />
      </NavLink>
    </HeaderStyled>
  );
};

export default Header;
