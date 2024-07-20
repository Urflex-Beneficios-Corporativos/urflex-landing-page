import { Routes, Route, BrowserRouter } from "react-router-dom";

import Presentation from "../pages/Home";
import TeamPage from "../pages/Team";
import Header from "../components/Header";

const routes = () => {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Presentation />} />
                <Route path="/team" element={<TeamPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default routes