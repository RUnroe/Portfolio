import './App.css';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import NavigationMenu from './partials/NavigationMenu';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import {useEffect} from 'react';

function App() {
  return (
    <BrowserRouter>
    <NavigationMenu />
    
    <div id="main">
      <RoutesModule />
    </div>
    <Footer/>
  </BrowserRouter>
  );
}

function RoutesModule() {
  let location = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
  return (
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/projects">
      <ProjectList />
    </Route>
   
    <Route path="/">
      <Redirect to={{pathname: '/'}} />
    </Route>
  </Switch>
  )
}

function Footer() {
  return (
  <footer>
    <p><a href="mailto:ryanunroe@gmail.com">ryanunroe@gmail.com</a></p>
  </footer>
  );
}



export default App;
