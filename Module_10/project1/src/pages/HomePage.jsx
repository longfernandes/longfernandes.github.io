import React from "react";
import HeroSection from "../components/home/HeroSection";
import MenuSection from "../components/home/MenuSection";
import ServiceSection from "../components/home/ServiceSection";
import BookingSection from "../components/home/BookingSection";
import ContactSection from "../components/home/ContactSection";
import ReasonsSection from "../components/home/ReasonsSection";

function HomePage() {
    return (
        <div>
        <HeroSection />
        <MenuSection />
        <ServiceSection />
        <BookingSection />
        <ContactSection />
        <ReasonsSection />
        </div>
    );
};

export default HomePage;