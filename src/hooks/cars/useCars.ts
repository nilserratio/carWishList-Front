import axios from "axios";
import { paths } from "../../utils/paths/paths";
import { useCallback } from "react";
import { CarBrandsDataStructure } from "../../store/cars/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useCars = () => {
  const getCars = useCallback(async (): Promise<CarBrandsDataStructure[]> => {
    const {
      data: { marcas },
    } = await axios.get<{ marcas: CarBrandsDataStructure[] }>(
      `${apiUrl}${paths.cars}`
    );

    return marcas;
  }, []);

  return { getCars };
};

export default useCars;
