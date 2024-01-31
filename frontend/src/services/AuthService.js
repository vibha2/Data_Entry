import axios_api from "../axios";

const AuthService = {

signUp: async function(user){
    return axios_api.post("/signup", user )
},

login: async function(email, password){
    return axios_api.post("/login", {email:email, password:password})
},

getUserById: async function(userId){
    return axios_api.get("/user/"+ userId)
}

}

export default AuthService;