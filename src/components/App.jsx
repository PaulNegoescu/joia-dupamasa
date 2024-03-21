import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Counter } from "../features/Counter/Counter";
import { Weather } from "../features/Weather/Weather";
import { Nav } from "./Nav/Nav";

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={ <h1>Homepage</h1> } />
        <Route path="/counter" element={ <Counter /> } />
        <Route path="/weather" element={ <Weather /> } />
        <Route path="*" element={ <h1>404</h1> } />
      </Routes>
    </BrowserRouter>
  )
}
