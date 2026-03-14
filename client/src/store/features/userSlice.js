import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: [],
    loading: true,
    error: false
}

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state, payload) => {
            state.user = ['shivam', "sikha"]
        }
    }
})

export { getUser } from userReducer.actions;
export default userReducer;