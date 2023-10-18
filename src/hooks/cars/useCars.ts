import axios from "axios";
import { paths } from "../../utils/paths/paths";
import { useCallback } from "react";
import { CarDataStructure } from "../../store/cars/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useCars = () => {
  const getCars = useCallback(async (): Promise<CarDataStructure[]> => {
    const {
      data: { cars },
    } = await axios.get<{ cars: CarDataStructure[] }>(`${apiUrl}${paths.cars}`);

    return cars;
  }, []);

  return { getCars };
};

export default useCars;
