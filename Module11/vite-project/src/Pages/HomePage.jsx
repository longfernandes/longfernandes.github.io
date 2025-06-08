import React from  'react';
import { Outlet, useNavigate } from 'react-router-dom'

function HomePage() {

    return (
        <div className="h-screen flex justify-center items-center bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to. . .
        </h1>
      </div>
    );

}
export default HomePage;