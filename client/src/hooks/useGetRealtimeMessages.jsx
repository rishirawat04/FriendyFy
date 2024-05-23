import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'

const useGetRealtimeMessages = () => {
  const {socket} = useSelector(store => store.socket)
  const {messages} = useSelector(store => store.message)
  const dispatch = useDispatch()

  useEffect(() => {
    socket?.on("newMessage", (newMessages) => {
        dispatch(setMessages([...messages, newMessages]))
    })
  }, [socket, setMessages, messages])
}

export default useGetRealtimeMessages