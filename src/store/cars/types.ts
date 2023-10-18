export interface CarDataStructure {
  id: string;
  nombre: string;
  img: string;
}

export interface CarBrandsDataStructure {
  nombre: string;
  modelos: CarDataStructure[];
}

export interface CarsStateStructure {
  marcas: CarBrandsDataStructure[];
}
