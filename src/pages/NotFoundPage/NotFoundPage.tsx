import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";
import { paths } from "../../utils/paths/paths";

const NotFoundPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const actionOnClick = () => {
    navigate(paths.home, { replace: true });
  };

  return (
    <NotFoundPageStyled className="notFound-container">
      <span className="notFound-container__text">Oops!</span>
      <h1 className="notFound-container__title">
        404 - Something went wrong...
      </h1>
      <Button
        className="notFound-container__button"
        text="Back to Homepage"
        actionOnClick={actionOnClick}
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
