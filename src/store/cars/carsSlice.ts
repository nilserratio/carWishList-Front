import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CarBrandsDataStructure, CarsStateStructure } from "./types";

export const initialCarsState: CarsStateStructure = {
  marcas: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialCarsState,
  reducers: {
    loadCars: (
      currentCarsState: CarsStateStructure,
      action: PayloadAction<CarBrandsDataStructure[]>
    ): CarsStateStructure => ({
      ...currentCarsState,
      marcas: [...action.payload],
    }),
    empltyCars: (): CarsStateStructure => ({
      ...initialCarsState,
    }),
  },
});

export const {
  loadCars: loadCarsActionCreator,
  empltyCars: empltyCarsActionCreator,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
