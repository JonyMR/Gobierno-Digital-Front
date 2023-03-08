import * as axios from "axios";

// export const token = () => {
//     return window.localStorage.getItem('tokenLlave');
// }

export const config = () => {
   // let token = window.localStorage.getItem('tokenLlave');
    return {
        headers: {
             "Authorization": `Bearer token`,
            //"Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwiaWF0IjoxNjc1Mjc3MTM5LCJleHAiOjE2Nzc4NjkxMzksIm5iZiI6MTY3NTI3NzEzOSwianRpIjoiV3NQWXdPM3Z4VnlnSkF6WiIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pAMJaCu4Yzpg8cJvaro2dWH42_7lihwLl_N2McI4FRA`,
        }
    }
}

export const settings = () => {
    return {
        headers: {
            "Content-Type": "application/json",
        }
    }
}



// export const services = (method, service, body) => {

//     switch (method) {
//         case "GET":

//             let url = `http://127.0.0.1:8000/api/${service}`;
//             return axios.get(url, config()).then((r) => {
//                 return response(r)
//             }).catch((err) => {
//                 return response(err.response);
//             });


//         case "POST":

//             return axios.post(`http://127.0.0.1:8000/api/${service}`, body, config()).then((r) => {
//                 return response(r);
//             }).catch((err) => {
//                 return response(err.response);
//             });


//         // case "PUT":
//         //     return axios.put(`${process.env.REACT_APP_URLAPI}${service}`, body, config()).then((r) => {
//         //         return response(r);
//         //     }).catch((err) => {
//         //         return response(err.response);
//         //     });

//         // case "DELETE":
//         //     return axios.delete(`${process.env.REACT_APP_URLAPI}${service}`, config()).then((r) => {
//         //         return response(r);
//         //     }).catch((err) => {
//         //         return response(err.response);
//         //     });

//         default:
//             break;
//     }
// }




const response = (r) => {

    if (r === undefined) {
        return false;
    }

    if (r.status === 401) {
        console.log("NO AUTORIZADO");
        // window.localStorage.clear();
        // window.location.replace(process.env.REACT_APP_URLLLAVEGLOBAL);
        return false
    }

    if (r.status === 200) {
        return { status: r.status, data: r.data }
    }

    if (r.status === 201) {
        window.location.replace(process.env.REACT_APP_URLLLAVEGLOBAL);
        window.localStorage.clear();
        return false
    }

    if (r.status === 500) {
        window.location.replace('/serverError');

        return { status: r.status }
    }

    return { status: r.status, errors: r.data.error }
}   