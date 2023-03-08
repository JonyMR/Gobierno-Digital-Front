import { useState } from 'react';
import userService from '../services/userService';
import { services } from '../services/api';

import axios from 'axios';

const AñadirUsuario = () => {

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

    const [usuario, setUsuario] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });
    }

    const saveUser = () => {
        let data = JSON.stringify({
            id: usuario.id,
            name: usuario.name,
            email: usuario.email,
            password: usuario.password,
            email_verified_at: usuario.email_verified_at,
            remember_token: usuario.remember_token,
        }
)

const config = {
    method: 'post',
    url:'http://localhost:8000/api/usuarios',
    headers:{
        'content-type': 'application/json'
    },
    data: data
}

axios(config).then((response)=>{
    console.log(response);
})


        // services('POST','/usuarios',data).then((response)=>{

        //     console.log(response);
        // });

        // axios.post('http://localhost:8000/api/usuarios',data)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        // userService.create(data).then(response => {
        //     setUsuario({
        //         id: response.data.id,
        //         name: response.data.name,
        //         email: response.data.email,
        //         password: response.data.password,
        //         email_verified_at: response.data.email_verified_at,
        //         remember_token: response.data.remember_token
        //     });
        //     setSubmitted(true);
        //     console.log(usuario);
        // }).catch(err => {
        //     alert('ocurrio un error');
        //     console.log(err);
        // });
    }

    const nuevoUsuario = () => {
        setUsuario(initialState);
        setSubmitted(false);
    }

    return (
        <div className='submit-form'>
            {submitted ? (
                <div>
                    <h4>Has creado exitosamente el usuario</h4>
                    <button className='btn btn-primary' onClick={nuevoUsuario}>Crear otro</button>
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
                            value={usuario.name}
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
                            value={usuario.email}
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
                            value={usuario.password}
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
                            value='0'
                            onChange={handleInputChange}
                            name="remember_token"
                        />
                    </div>
                    <br />
                    <button onClick={saveUser} className="btn btn-success">
                        Registrar Usuario
                    </button>


                </div>
            )}
        </div>
    )
};

export default AñadirUsuario;