import { configureStore } from "@reduxjs/toolkit";
import MedicalSlice from "./MedicalSlice";
export const MedicalStore = configureStore({
    reducer:{
        MedicalEquipment:MedicalSlice
    }
})

export type RootState = ReturnType<typeof MedicalStore.getState>
export type AppDispatch = typeof MedicalStore.dispatch 