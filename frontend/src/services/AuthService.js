import axios_api from "../axios";

const AuthService = {

signUp: async function(user){
    return axios_api.post("/signup/", user )
}

}

export default AuthService;