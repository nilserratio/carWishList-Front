import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import HomepageStyled from "./HomepageStyled";
import { loadCarsActionCreator } from "../../store/cars/carsSlice";
import CarsList from "../../components/CarsList/CarsList";
import useCars from "../../hooks/cars/useCars";
import { CarBrandsDataStructure } from "../../store/cars/types";
import useUser from "../../hooks/user/useUser";
import { loadUserFavoritesActionCreator } from "../../store/user/userSlice";

const Homepage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getCars } = useCars();
  const { getFavoriteCars } = useUser();
  const { id } = useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        const carsList: CarBrandsDataStructure[] = await getCars();

        dispatch(loadCarsActionCreator(carsList));
      } else {
        const favoriteCars: string[] = await getFavoriteCars(id);
        const carsList: CarBrandsDataStructure[] = await getCars();

        dispatch(loadUserFavoritesActionCreator(favoriteCars));
        dispatch(loadCarsActionCreator(carsList));
      }
    };

    fetchData();
  }, [dispatch, getCars, getFavoriteCars, id]);

  return (
    <HomepageStyled className="homepage-container">
      <h1 className="homepage-container__title">Recomotor favorite cars</h1>
      <CarsList />
    </HomepageStyled>
  );
};

export default Homepage;
