import React from "react";
import { useState, useEffect } from "react";
import UserService from '../services/userService';
import { useNavigate} from "react-router-dom";

const ListaUsuarios = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        retrieveUsers()
    }, []);



    const retrieveUsers = () => {
        UserService.getAll()
            .then(response => {
                setUsers(response.data);
                console.log(users);
            }).catch(err => {
                alert("Ocurrio un error");
                console.log(err);
            });

    }

    const refreshList = () => {
        retrieveUsers();
    }

    return (
        <div className="row">
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Email_Verified_At</th>
                        <th scope="col">Password</th>
                        <th scope="col">Remember_Token</th>
                        <th scope="col">Created_At</th>
                        <th scope="col">Updated_At</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((usuario, index) => (
                            <tr key={index}>
                                <th>{usuario.id}</th>
                                <td>{usuario.name}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.email_verified_at}</td>
                                <td>{usuario.password}</td>
                                <td>{usuario.remember_token}</td>
                                <td>{usuario.created_at}</td>
                                <td>{usuario.updated_at}</td>
                                <td>
                                    <i className="bi bi-pencil-fill" onClick={()=> {navigate('/usuarios/' + usuario.id)}}></i>
                                </td>


                            </tr>
                        ))

                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ListaUsuarios;