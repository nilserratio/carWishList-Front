import { CarDataStructure } from "../../types";
import CarsListStyled from "./CarsListStyled";

interface CarsListProps {
  nombre: string;
  modelos: CarDataStructure[];
}

const CarsList = ({ nombre, modelos }: CarsListProps): React.ReactElement => {
  return (
    <CarsListStyled className="carsList-container" aria-label="list of cars">
      {modelos.map((modelo) => (
        <li key={modelo.id} className="carsList-container__card">
          <span>
            {nombre} {modelo.nombre} Card
          </span>
        </li>
      ))}
    </CarsListStyled>
  );
};

export default CarsList;
