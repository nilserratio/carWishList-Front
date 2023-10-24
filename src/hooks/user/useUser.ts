import axios from "axios";
import { useCallback } from "react";
import { UserCredentials } from "../../types";
import { paths } from "../../utils/paths/paths";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getToken = async (
    userCredentials: UserCredentials
  ): Promise<string> => {
    try {
      const { data } = await axios.post<{ token: string }>(
        `${apiUrl}${paths.user}${paths.login}`,
        userCredentials
      );

      return data.token;
    } catch (error) {
      throw new Error("Wrong Credentials");
    }
  };

  const addToFavorites = useCallback(async (carId: string, _id: string) => {
    try {
      await axios.post(`${apiUrl}${paths.user}${paths.favorites}${paths.add}`, {
        carId,
        _id,
      });
    } catch (error) {
      throw new Error("Car not added to favorites");
    }
  }, []);

  const removeFromFavorites = useCallback(
    async (carId: string, _id: string) => {
      try {
        await axios.post(
          `${apiUrl}${paths.user}${paths.favorites}${paths.remove}`,
          {
            carId,
            _id,
          }
        );
      } catch (error) {
        throw new Error("Car not remove from favorites");
      }
    },
    []
  );

  return { getToken, addToFavorites, removeFromFavorites };
};

export default useUser;
