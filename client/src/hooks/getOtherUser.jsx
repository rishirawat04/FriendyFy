import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { setOtherUser } from '../redux/userSlice'
const GetOtherUser = () => {

const dispatch = useDispatch()

 useEffect(() => {
    const getUser = async() => {
        try {
            axios.defaults.withCredentials = true
            const res = await axios.get("http://localhost:8080/api/v1/user")
           // console.log(res)
           dispatch(setOtherUser(res.data))
        } catch (error) {
            console.log(error.message);
        }
    }
    getUser()
 },[])
}

export default GetOtherUser