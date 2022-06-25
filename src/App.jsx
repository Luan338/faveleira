import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header.jsx";
import { Footer } from "./Components/Footer/Footer";


export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

