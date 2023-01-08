import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReflexoPage from "./pages/ReflexoPage";
import CoachingPage from "./pages/CoachingPage";
import FormationPage from "./pages/FormationPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import NewArticlePage from "./pages/NewArticlePage";
import EditArticlePage from "./pages/admin/EditArticlePage";
import AdminPage from './pages/admin/AdminPage';
import Navbar from "./components/Navbar";
import AllArticlesPage from "./pages/admin/AllArticlesPage";

function App() {
  return ( 
    <Router>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reflexologie" element={<ReflexoPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/formation" element={<FormationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route exact path="/blog/:article" element={<ArticlePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-articles" element={<AllArticlesPage />} />
        <Route path="/createpost" element={<NewArticlePage />} />
        <Route path="/edit/:article" element={<EditArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
