import { useAppSelector } from "../../store";
import CarCard from "../CarCard/CarCard";
import CarsListStyled from "./CarsListStyled";

const CarsList = (): React.ReactElement => {
  const marcas = useAppSelector((state) => state.cars.marcas);
  const { favoriteCars } = useAppSelector((state) => state.user);

  const isModelInFavorites = (modelId: string) => {
    return favoriteCars.some((favoriteModelId) => favoriteModelId === modelId);
  };

  return (
    <CarsListStyled className="carsList-container" aria-label="list of cars">
      {marcas.map((marca) => (
        <div key={marca.nombre} className="carsList-container__brand">
          <h3 className="carsList-container__tittle">{marca.nombre}</h3>
          <ul className="carsList-container__model-list">
            {marca.modelos.map((modelo) => (
              <li key={modelo.id} className="carsList-container__model-item">
                <CarCard
                  modelo={modelo}
                  marca={marca}
                  isFavorite={isModelInFavorites(modelo.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </CarsListStyled>
  );
};

export default CarsList;
