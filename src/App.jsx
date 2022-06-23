import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header.jsx";


export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  )
}

