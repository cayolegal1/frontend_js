import axios from 'axios'

const instance = axios.create({           //se crea una instancia  
    baseURL: 'http://localhost:8000/api/'
})


const SendEmail = async (DataConsole) => {
    const respuesta = await instance({
        method: 'post',
        url: 'contact/store',
        data: DataConsole,
    });
    return respuesta
}

export {
    SendEmail
}