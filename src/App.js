import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import AñadirUsuario from "./components/AñadirUsuario";
import Usuario from "./components/Usuario";
import ListaUsuarios from "./components/ListaUsuarios";
import Login from './components/Login';
import NavBar from './components/NavBarComponent';

const RouterApp = () =>{

  let routes = useRoutes([
    {path:'/', element:<Login/>},
    {path:'/listarUsuarios', element:<ListaUsuarios/>},
    {path:'/addUser', element:<AñadirUsuario/>},
    {path:'/usuarios', element:<Usuario/>},
    {path:'/usuarios/:id', element:<Usuario/>},
  ]);

  return routes;
}


function App() {
  return (
    <div className="App">
      <Router basename='/home'>
        <NavBar/>
        <RouterApp/>
      </Router>
     
    </div>
  );
}

export default App;
