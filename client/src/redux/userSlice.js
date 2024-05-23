import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        authUser:null,
        otherUser:null,
        selectedUser:null,
        onlineUsers:null,
        searchUser:null
    },
    reducers:{
        setAuthUser:(state, action) => {
            state.authUser = action.payload
        },
        setOtherUser:(state,action) => {
            state.otherUser = action.payload
        },
        setSelectedUser:(state, action) => {
            state.selectedUser = action.payload
        },
       setOnlineUser:(state, action) => {
        state.onlineUsers = action.payload
       },
       setSearchUser:(state, action) => {
        state.searchUser = action.payload
       }
    }
})

export const {setAuthUser, setOtherUser, setSelectedUser,setOnlineUser,setSearchUser } = userSlice.actions;
export default userSlice.reducer