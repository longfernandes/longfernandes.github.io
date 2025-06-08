import React from "react";
import { Outlet } from "react-router-dom";
function AboutLayout() {
    return (
        <div className="space-y-4">
            
            <Outlet />

        </div>
    );
};

export default AboutLayout;