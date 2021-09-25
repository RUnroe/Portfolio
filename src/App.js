import './App.css';
import Home from '/pages/Home';
import ProjectList from '/pages/ProjectList';
import NavigationMenu from './partials/NavigationMenu';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

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

}

function Footer() {

}



export default App;
