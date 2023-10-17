import { NavLink, useNavigate } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";
import { paths } from "../../utils/paths/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import Button from "../Button/Button";

const Header = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();

  const actionOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeToken("token");
    navigate(paths.login);
  };

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
      {isLogged ? (
        <Button
          className="header-container__button"
          actionOnClick={actionOnClick}
          text="Sign out"
        />
      ) : (
        <NavLink to={paths.login} className="header-container__link">
          Sign In
        </NavLink>
      )}
    </HeaderStyled>
  );
};

export default Header;
