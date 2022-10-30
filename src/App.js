import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReflexoPage from "./pages/ReflexoPage";
import CoachingPage from "./pages/CoachingPage";
import FormationPage from "./pages/FormationPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import NewArticlePage from "./pages/NewArticlePage";
import AdminPage from './pages/AdminPage';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reflexologie" element={<ReflexoPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/formation" element={<FormationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route exact path="/blog/:article" element={<ArticlePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/createpost" element={<NewArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
