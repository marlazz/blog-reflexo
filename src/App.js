import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ReflexoPage from "./pages/ReflexoPage";
import CoachingPage from "./pages/CoachingPage";
import FormationPage from "./pages/FormationPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import NewArticlePage from "./pages/NewArticlePage";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/reflexologie"> Reflexologie </Link>
        <Link to="/coaching"> Coaching </Link>
        <Link to="/formation"> Formation </Link>
        <Link to="/blog"> Blog </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reflexologie" element={<ReflexoPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/formation" element={<FormationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route exact path="/blog/:article" element={<ArticlePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<NewArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
