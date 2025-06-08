import React from "react";
import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";


function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>
            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;