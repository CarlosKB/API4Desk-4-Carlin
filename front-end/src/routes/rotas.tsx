import React from "react";
import { Routes, Route } from "react-router-dom";
import LendingPage from "../pages/lendingpage";
import Estabelecimento from "../pages/estabelecimento";
import ParSaldo from "../pages/parSaldo";
import Registration from "../pages/registration";
import { BrowserRouter } from "react-router-dom";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LendingPage />} />
                <Route path="/estabelecimento" element={<Estabelecimento />} />
                <Route path="/par-saldo" element={<ParSaldo />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    );
};
