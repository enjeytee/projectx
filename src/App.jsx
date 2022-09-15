import React from "react";
import NavBar from "./components/NavBar.jsx";
// import SearchBar from "./components/SearchBar.jsx";
import Transactions from "./components/Transactions.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div>
            <NavBar />
            {/* <SearchBar /> */}
            <Transactions />
            <Footer />
        </div>
    );
};