import { CarDataStructure } from "../../types";
import CarCardStyled from "./CarCardStyled";

interface CarCardProps {
  modelos: CarDataStructure;
}

const CarCard = ({
  modelos: { nombre, img },
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
        <h2>{nombre}</h2>
      </div>
    </CarCardStyled>
  );
};

export default CarCard;
