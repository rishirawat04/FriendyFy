import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'

const GetMessages = () => {
    const dispatch = useDispatch()

    const { selectedUser } = useSelector(store => store.user)
    
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true
                if (selectedUser && selectedUser._id) {
                    const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser._id}`)
                    console.log(res);
                    dispatch(setMessages(res.data))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages()
    }, [selectedUser])
 
    return null; // Or return any JSX if needed
}

export default GetMessages
