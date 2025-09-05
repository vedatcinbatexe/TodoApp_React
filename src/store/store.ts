import { configureStore } from '@reduxjs/toolkit'

// Example slice import (we’ll make it next)
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
