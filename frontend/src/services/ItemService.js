import axios_api from "../axios";

const ItemService = {

itemSubmit: async function(formData){
    try{
    const response = axios_api.post("/upload/itemDataUpload", formData);
    console.log("response in service=> ", response, " ", response.data);
    return response.data;
    }catch(error){
        console.log("error ",error);
    }
}

}

export default ItemService;