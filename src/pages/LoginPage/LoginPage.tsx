import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useToken from "../../hooks/token/useToken";
import useUser from "../../hooks/user/useUser";
import { useAppDispatch } from "../../store";
import LoginPageStyled from "./LoginPageStyled";
import { UserCredentials } from "../../types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import { UserFavoritesStructure } from "../../store/user/types";

const LoginPage = (): React.ReactElement => {
  const { getToken } = useUser();
  const { decodeToken } = useToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setToken } = useLocalStorage();

  const loginOnSubmit = async (userCredentials: UserCredentials) => {
    const token = await getToken(userCredentials);

    if (token) {
      const userData = decodeToken(token);

      dispatch(
        loginUserActionCreator({
          ...userData,
          token,
        } as UserFavoritesStructure)
      );
      setToken("token", token);
      navigate("/home", { replace: true });
    }
  };

  return (
    <LoginPageStyled className="login-container">
      <h1 className="login-container__title">Sign in</h1>
      <LoginForm actionOnSubmit={loginOnSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
