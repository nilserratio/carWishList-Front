import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  CarBrandsDataStructure,
  CarDataStructure,
} from "../../store/cars/types";
import CarCardStyled from "./CarCardStyled";
import Button from "../Button/Button";
import useUser from "../../hooks/user/useUser";
import {
  addFavoriteCarActionCreator,
  removeFavoriteCarActionCreator,
} from "../../store/user/userSlice";

interface CarCardProps {
  modelo: CarDataStructure;
  marca: CarBrandsDataStructure;
  isFavorite: boolean;
}

const CarCard = ({
  modelo: { id, nombre, img },
  marca: { nombre: brandName },
  isFavorite,
}: CarCardProps): React.ReactElement => {
  const [isFavoriteState, setIsFavorite] = useState(isFavorite);
  const dispatch = useAppDispatch();
  const { addToFavorites, removeFromFavorites } = useUser();
  const { id: userId, isLogged } = useAppSelector((state) => state.user);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(id, userId);
      dispatch(removeFavoriteCarActionCreator(id));
    } else {
      addToFavorites(id, userId);
      dispatch(addFavoriteCarActionCreator(id));
    }
    setIsFavorite(!isFavorite);
  };

  const isUserLogged = isLogged;

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
      {isUserLogged && (
        <Button
          className="car-card__favorite-button"
          text={isFavoriteState ? "Remove from favorites" : "Add to favorites"}
          actionOnClick={toggleFavorite}
        />
      )}
    </CarCardStyled>
  );
};

export default CarCard;
