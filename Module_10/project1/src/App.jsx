import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import MenuPage from "./pages/MenuPage";
import MenuDetail from "./pages/MenuDetail";
import ListMenuPage from "./pages/ListMenuPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="news" element={<NewsPage />} />
                        <Route path="menu" element={<MenuPage />} />
                        <Route path="menu/:id" element={<MenuDetail />} />
                        <Route path="list-menu" element={<ListMenuPage />} />
                        <Route path="cart" element={<CartPage />} />
                        <Route path="login" element={<LoginPage />} />
                    </Route>
                    <Route path="Signup" element={<SignupPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
