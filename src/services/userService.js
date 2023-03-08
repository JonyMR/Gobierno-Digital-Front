import http from '../http-common';

const getAll = () => {
    return http.get('usuarios');
}

const getByID = (id) => {
    return http.get(`usuarios/${id}`);
}

const create = (data) => {
    return http.post(`usuarios`,data);
}

const update = (id, data) => {
    return http.put(`usuarios/${id}`, data);
}

const remove = (id) => {
    return http.delete(`usuarios/${id}`);
}

export default {
    getAll,
    getByID,
    create,
    update,
    remove
}