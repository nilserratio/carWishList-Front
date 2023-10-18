import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CarsStateStructure } from "./types";
import { CarBrandDataStructure } from "../../types";

export const initialCarsState: CarsStateStructure = {
  marcas: [],
};

const carssSlice = createSlice({
  name: "cars",
  initialState: initialCarsState,
  reducers: {
    loadCars: (
      currentCarsState: CarsStateStructure,
      action: PayloadAction<CarBrandDataStructure[]>
    ) => ({
      ...currentCarsState,
      cars: [...action.payload],
    }),
  },
});

export const { loadCars: loadCarsActionCreator } = carssSlice.actions;
export const carsReducer = carssSlice.reducer;
