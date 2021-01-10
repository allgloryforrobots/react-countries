const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/',
})


export async function readServerDataDAL(params = 'all') {

    return await instance.get(params)

}