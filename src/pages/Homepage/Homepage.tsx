import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import HomepageStyled from "./HomepageStyled";
import { loadCarsActionCreator } from "../../store/cars/carsSlice";
import { carsBrandMock, carsMock } from "../../mocks/cars/carsMocks";
import CarsList from "../../components/CarsList/CarsList";

const Homepage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCarsActionCreator(carsMock));
  }, [dispatch]);

  return (
    <HomepageStyled className="homepage-container">
      <h1 className="homepage-container__title">Recomotor favorite cars</h1>
      <CarsList modelos={carsBrandMock} nombre="Seat" />
    </HomepageStyled>
  );
};

export default Homepage;
