import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function Router(){

    return <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Homepage/>} ></Route>
            <Route path="/chats" element={<ChatPage/>}></Route>
        </Routes>
    </BrowserRouter>
};

export default Router;