
import { useRoutes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import NewsDetail from "./page/NewsDetail";
import NewsPage from "./page/NewsPage";

function App() {
  const elementsRoutes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        {
          path: "news",
          element: <NewsPage />,
          children: [{ path: ":newsId", element: <NewsDetail /> }],
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
      children: [],
    },
    {
      path: "*",
      element: <>Not Found</>,
      children: [],
    },
  ]);
  return (
    // <Routes>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/about" element={<About />}>
    //       <Route path="me" element={<h1>About Me</h1>} />
    //     </Route>
    //     <Route path="/news" element={<News />}>
    //       <Route path=":id" element={<NewsDetail />} />
    //     </Route>
    //     <Route path="*" element={<h1>404 Not Found</h1>} />
    //   </Route>
    // </Routes>
    <div>{elementsRoutes}</div>
  );
}

export default App;
