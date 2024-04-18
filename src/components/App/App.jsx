import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Nav } from "../Nav/Nav";
import { Auth, AuthContextProvider, BoardgameList } from "@/features";

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={ <h1>Homepage</h1> } />
          <Route path="register" element={<Auth />} />
          <Route path="login" element={<Auth />} />
          <Route path="boardgames" element={<BoardgameList />} />
          <Route path="*" element={ <h1>404</h1> } />
        </Routes>
      </AuthContextProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}
