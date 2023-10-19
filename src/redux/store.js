import { configureStore } from '@reduxjs/toolkit'
import authSlice  from './slices/authSlice'
import getTrip  from './slices/tripSlice'

export const store = configureStore({
    reducer: {
        userAuth: authSlice,
        app: getTrip
    },
})