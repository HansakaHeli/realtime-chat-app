import React, { useEffect } from 'react'
import axios from "axios"

const ChatPage = () => {

    const fetchChats = async()=>{
        const data = await axios.get("");
    }

    useEffect(()=>{
        fetchChats();
    },[]);


    return (
        <div>
            <h1>Chat page</h1>
        </div>
    )
}

export default ChatPage
