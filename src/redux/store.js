import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './Mode/modeSlice'

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
})