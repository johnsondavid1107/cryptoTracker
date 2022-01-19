import axios from 'axios';


export default {

    createCrypto: function (info) {
        console.log(info)

        return axios.post('/api/create', info).then(function (response) {
            return response

        })
    },
    getCrypto: function () {
        return axios.get('/api/get').then(function (response) {
            return response
        })
    }


}