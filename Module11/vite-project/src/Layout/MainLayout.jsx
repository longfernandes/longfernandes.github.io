import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import StudentsPage from "../Pages/StudentsPage";


function MainLayout( { username, setUsername }) {
  
  
  
  return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header username={username} onLogout={() => setUsername(null)} />

        <main className="flex-grow p-6">
          
          <Outlet context={{}} />
        </main>

        <footer className="bg-white text-center p-4 text-sm text-gray-500 border-t">
        2025 ReactJs.
      </footer>

      </div>
    
      
  );
};

export default MainLayout;