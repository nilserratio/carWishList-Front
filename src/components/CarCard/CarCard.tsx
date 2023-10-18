import {
  CarBrandsDataStructure,
  CarDataStructure,
} from "../../store/cars/types";
import CarCardStyled from "./CarCardStyled";

interface CarCardProps {
  modelo: CarDataStructure;
  marca: CarBrandsDataStructure;
}

const CarCard = ({
  modelo: { nombre, img },
  marca: { nombre: brandName },
}: CarCardProps): React.ReactElement => {
  return (
    <CarCardStyled className="car-card">
      <img
        className="car-card__image"
        src={img}
        alt={`The car named ${nombre}`}
        width={276}
        height={235}
      />
      <div className="car-card__information">
        <h3>{brandName}</h3>
        <h2>{nombre}</h2>
      </div>
    </CarCardStyled>
  );
};

export default CarCard;
