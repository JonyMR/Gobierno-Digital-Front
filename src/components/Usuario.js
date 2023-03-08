import { useEffect, useState } from 'react';
import userService from '../services/userService';
import axios from 'axios';
import {  useParams } from 'react-router-dom';

const Usuario = (props) => {

    const initialState = {
        id: null,
        name: '',
        email: '',
        email_verified_at: '',
        password: '',
        remember_token: null,
        created_at: '',
        updated_at: ''
    };

    const [currentUser, setCurrentUser] = useState(initialState);
    const [message, setMessage] = useState('');

    const getUser = (id) => {
        userService.getByID(id).then(response => {
            setCurrentUser(response.data);
        }).catch(err => {
            alert('Error actualizando!');
            console.log(err);
        });
    }

    useEffect(() => {
        getUser(props.match.params.id)
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    }

    const updateUser = () => {
        userService.update(currentUser.id, currentUser).then(response => {
            setMessage('Se actualizó correctamente');


        }).catch(err => {
            alert('Ocurrio un error');
            console.log(err);
        });
    }

    return (
        <div className='submit-form'>
            {currentUser ? (
                <div>
                    <h4>Has creado exitosamente el usuario</h4>
                    <button className='btn btn-primary' onClick={updateUser}>Crear otro</button>
                </div>
            ) : (
                <div>
                    <div className='input-group-text'>
                        <label>Nombre:  </label>
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            required
                            value={currentUser.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>

                    <div className='input-group-text'>
                        <label>Correo:  </label>
                        <input
                            type="text"
                            className='form-control'
                            id='email'
                            required
                            defaultValue={currentUser.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </div>

                    <div className='input-group-text'>
                        <label>Contraseña:  </label>
                        <input
                            type="password"
                            className='form-control'
                            id='password'
                            required
                            defaultValue={currentUser.password}
                            onChange={handleInputChange}
                            name="password"
                        />
                    </div>

                    <div className='input-group-text'>
                        <label>Recordar Contraseña:  </label><br />
                        <input
                            type="checkbox"
                            id='remember_token'
                            required
                            defaultValue='0'
                            onChange={handleInputChange}
                            name="remember_token"
                        />
                    </div>
                    <br />
                    <button onClick={ProductScreen} className="btn btn-success">
                        Actualizar Usuario
                    </button>
                    <br/>
                    <button className="btn btn-success">
                        Eliminar Usuario
                    </button>
                    


                </div>
            )}
        </div>
    )
};

export default Usuario;
