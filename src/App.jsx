import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header.jsx";
import { Footer } from "./Components/Footer/Footer";
import VLibras from "@djpfs/react-vlibras";


export function App() {
  return (
    <BrowserRouter>
      <Header />
      <VLibras forceOnload={true} />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

