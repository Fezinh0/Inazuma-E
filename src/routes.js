import PlayerS from "Pages/PlayerS";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Personagens from "Pages/Ppersonagens";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Container from "Components/Container";
import Curiosidades from "Pages/Curiosidades";

function AppRoutes() {
    return(
       <BrowserRouter>
       <Header/>
       <Container>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path=":id" element={<PlayerS/>}></Route>     
                <Route path="/Ppersonagens" element={<Personagens/>}></Route>
                <Route path="/Curiosidades" element={<Curiosidades/>}></Route>
            </Routes>
        </Container>
        <Footer/>            
       </BrowserRouter>
    )

}
export default AppRoutes;