import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../../store/user/types";

const useToken = () => {
  const decodeToken = (token: string): UserTokenStructure => {
    const tokenData: { sub: string } = jwt_decode(token);
    const userData: UserTokenStructure = {
      id: tokenData.sub,
      token,
    };

    return userData;
  };

  return { decodeToken };
};

export default useToken;
