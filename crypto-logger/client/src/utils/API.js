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
    },
    deleteCrypto: function (deleteParam) {
        return axios.delete('/api/delete/' + deleteParam).then(function (response) {
            return response
        })
    },
    updateCrypto: function (updateRequest) {
        console.log(updateRequest)
        return axios.put('/api/update/' + JSON.stringify(updateRequest)).then(
            function (response) {
                return response
            }

        )
    }


}