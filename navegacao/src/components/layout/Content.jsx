import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";

export default function Content(props) {

    return (
        <main className="Content">
            {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/" exact element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* --------------------------------------------------- */}
        </main>
    )
}