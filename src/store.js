import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './Pages/Filter/filterSlice'

export const store = configureStore({
  reducer: {
    filter: dashboardReducer,
  },
})
