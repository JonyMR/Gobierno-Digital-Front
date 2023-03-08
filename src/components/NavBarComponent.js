import React from 'react'
import { useNavigate} from "react-router-dom";



const NavBar = () => {


    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="btn-group" role="group">
                    <button onClick={()=> {navigate('/usuarios')}} className = 'btn btn-outline-primary'>Editar Usuario</button>
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className = 'btn btn-outline-primary' onClick={()=> {navigate('/listarUsuarios')}}>Listar usuarios</button>
                            </li>
                            <li className="nav-item">
                            <button className = 'btn btn-outline-primary' onClick={()=> {navigate('/addUser')}}>Agregar Usuario</button>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-3"></div>

        </div>
    
);
}




export default NavBar;
