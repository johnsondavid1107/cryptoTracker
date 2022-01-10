import axios from 'axios';


export default {

createCrypto: function(){
    return axios.post('/create')
}


}