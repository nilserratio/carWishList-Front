import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import HomepageStyled from "./HomepageStyled";
import { loadCarsActionCreator } from "../../store/cars/carsSlice";
import CarsList from "../../components/CarsList/CarsList";
import useCars from "../../hooks/cars/useCars";
import { CarBrandsDataStructure } from "../../store/cars/types";

const Homepage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getCars } = useCars();

  useEffect(() => {
    const fetchData = async () => {
      const carsList: CarBrandsDataStructure[] = await getCars();

      dispatch(loadCarsActionCreator(carsList));
    };

    fetchData();
  }, [dispatch, getCars]);

  return (
    <HomepageStyled className="homepage-container">
      <h1 className="homepage-container__title">Recomotor favorite cars</h1>
      <CarsList />
    </HomepageStyled>
  );
};

export default Homepage;
