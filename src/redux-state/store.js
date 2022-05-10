import { configureStore } from '@reduxjs/toolkit';
import projectStepsReducer from './projectStepsSlice';
import hifiImagesReducer from './hifiImagesSlice';

export const store = configureStore({
  reducer: {
    projectSteps: projectStepsReducer,
    hifiImages: hifiImagesReducer,
  },
});
