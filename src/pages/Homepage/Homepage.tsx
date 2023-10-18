import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import HomepageStyled from "./HomepageStyled";
import { loadCarsActionCreator } from "../../store/cars/carsSlice";
import { carsMock } from "../../mocks/cars/carsMocks";

const Homepage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCarsActionCreator(carsMock));
  }, [dispatch]);

  return (
    <HomepageStyled className="homepage-container">
      <h1 className="homepage-container__title">Recomotor favorite cars</h1>
    </HomepageStyled>
  );
};

export default Homepage;
