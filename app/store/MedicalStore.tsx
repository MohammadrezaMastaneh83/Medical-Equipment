import { configureStore } from "@reduxjs/toolkit";
import MedicalSlice from "./MedicalSlice";
export const Medical = configureStore({
    reducer:{
        MedicalEquipment:MedicalSlice
    }
})

export type RootState = ReturnType<typeof Medical.getState>
export type AppDispatch = typeof Medical.dispatch 