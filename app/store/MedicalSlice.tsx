import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MedicalState {
  open: boolean;
  open2: boolean;
  name: string;
}
const initialState: MedicalState = {
  open: false,
  open2: false,
  name: "",
};

export const MedicalSlice = createSlice({
  name: "MedicalEquipment",
  initialState,
  reducers: {
    handleClose: (state) => {
      state.open = false;
    },
    handleOpen: (state) => {
      state.open = true;
    },
    handleOpen2: (state) => {
      state.open2 = true;
    },
    handleClose2: (state) => {
      state.open2 = false;
    },
    loginName1: (state, action:PayloadAction<any>) => {
    
        state.name = action.payload;
        console.log("p", state.name);
      
    },
  },
});
export const {
  handleClose,
  handleOpen,
  handleOpen2,
  handleClose2,
  loginName1,
} = MedicalSlice.actions;
export default MedicalSlice.reducer;
