import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    value: number
}

const initialState: UserState = {
    value: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    },
})

export const { increment } = userSlice.actions
export default userSlice.reducer
