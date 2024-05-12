import './styles/portfolio.css';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import Project from './pages/Project';
import NavigationMenu from './partials/NavigationMenu';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import {useEffect, useState} from 'react';

function App() {
  const [onHomePage, setOnHomePage] = useState(true);
  return (
    <BrowserRouter>
    <NavigationMenu onHomePage={onHomePage}/>
    
    <div id="main" className={onHomePage ? "home": ""}>
      <RoutesModule setOnHomePage={setOnHomePage}/>
    </div>
  </BrowserRouter>
  );
}

function RoutesModule({setOnHomePage}) {
  let location = useLocation();
  useEffect(() => {
      if(location && location.pathname) {
        setOnHomePage( location.pathname.includes("/projects") === false);
      }
      window.scrollTo(0, 0);
    }, [location, setOnHomePage]);
  
  return (
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/projects" element={<ProjectList />} />
    <Route exact path="/projects/:projectName" element={<Project />} />
    <Route path="/" element={<Navigate to={{pathname: '/'}} />} />
  </Routes>
  )
}


export default App;
