import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark',
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.mode = 'dark';
    },
    setLightMode: (state) => {
      state.mode = 'light';
    },
  },
})

export const { setDarkMode, setLightMode } = modeSlice.actions

export default modeSlice.reducer
