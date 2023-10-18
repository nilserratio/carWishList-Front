export interface UserCredentials {
  username: string;
  password: string;
}

export interface CarDataStructure {
  id: string;
  nombre: string;
  img: string;
}

export interface CarBrandDataStructure {
  nombre: string;
  modelos: CarDataStructure[];
}
