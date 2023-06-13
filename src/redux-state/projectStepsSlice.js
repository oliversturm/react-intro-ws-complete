import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Sort out details', 'Implement', 'Ship'];

export const projectStepsSlice = createSlice({
  name: 'projectSteps',
  initialState,
  reducers: {
    addStep: (state) => {
      // Remember that we're in an Immer context here - so
      // perform updates using imperative APIs
      state.push(`New step added ${Date()}`);
    },
  },
});

export const { addStep } = projectStepsSlice.actions;
export default projectStepsSlice.reducer;
