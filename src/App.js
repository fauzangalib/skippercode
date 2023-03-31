import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComp from './component/NavbarComp';
import SidebarComp from './component/SideBar';
import HomePage from './page/Home/Home';
import HtmlPage from './page/Html/HtmlPage';
import CssPage from './page/Css/CssPage';
import JsPage from './page/Js/JsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <div className="content">
          <SidebarComp />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/html" element={<HtmlPage />} />
            <Route path="/css" element={<CssPage />} />
            <Route path="/javascript" element={<JsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;