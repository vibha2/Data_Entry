import React, { useState } from 'react';
import './AdminHome.css';
import ItemService from "../../../services/ItemService";
import { toast } from "react-hot-toast";

function AdminHome() {

    const handleSubmit = async(event) => {
      event.preventDefault();
      console.log("hello to HandleSubmit=> ");

      const formDataToSend = new FormData();
      formDataToSend.append('itemName', formData.itemName);
      formDataToSend.append('itemPrice', formData.itemPrice);
      formDataToSend.append('itemType', formData.itemType);
      formDataToSend.append('itemMode', formData.itemMode);
    
    // Append imageFile if it exists
    if (formData.imageFile) {
      formDataToSend.append('imageFile', formData.imageFile);
    }

      console.log(formData);
      try{
        ItemService.itemSubmit(formDataToSend)
        .then(data =>{ 
          toast.success("Item uploaded successfully");
          //console.log("file uploaded =>",data)
        }
        )
        .catch(error =>{
          toast.success("Item uploading failed");
          console.error(error)
        });
      }
      catch (error) {
        console.log("Failed to submit item:", error);
        toast.error("Item uploading failed");
      }
   

    }

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === "checkbox" ? checked : value;
      setFormData({ ...formData, [name]: newValue });

      // If file input, update imageFile
      if (type === 'file') {
        setFormData({ ...formData, imageFile: e.target.files[0] });
      }
    };

 

  const [formData, setFormData] = useState({
    itemName: '',
    itemPrice: '',
    itemType: '',
    imageFile: null,
    itemMode: ''
  });

  return (
    <div className='adminWrapper'>
      <div className='admin-cont'>
            <h3 className='login-heading'>Add Item</h3>
                <form class="" onSubmit={handleSubmit} >
                        <div class="mb-3">
                            <label class="form-label" for="itemName">Item Name</label>
                            <input 
                            placeholder="mango" 
                            type="text" 
                            name="itemName"
                            id="itemName" 
                            onChange={handleChange}
                            value={formData.itemName}
                            class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="itemPrice">Item Price</label>
                            <input 
                            placeholder="123" 
                            type="number" 
                            name="itemPrice" 
                            id="itemPrice" 
                            onChange={handleChange}
                            value={formData.itemPrice}
                            class="form-control" />
                        </div>

                        <div class="mb-3">
                          <label class="form-label" for='itemType'>Item Type </label>
                          <select
                          name="itemType"
                          id="itemType"
                          class="form-control"
                          onChange={handleChange}
                          value={formData.itemType}
                          >
                          <option value="">Select Type</option>
                          <option value="fruits">Fruits</option>
                          <option value="vegetable">Vegetable</option>
                          <option value="clothes">Clothes</option>
                          <option value="electronics">Electronics</option>
                          <option value="utensils">Utensils</option>

                          </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="imageFile">Upload Image</label>
                            <input 
                            // placeholder="123" 
                            type="file" 
                            name="imageFile" 
                            id="imageFile" 
                            class="form-control"
                            onChange={handleChange}
                            enctype="multipart/form-data"
                             />
                        </div>

                        <div class="mb-3">
                            <fieldset>
                              {/* <label class="form-label">Mode: </label> */}
                              
                              <legend style={{ fontSize: '1rem'}}>Mode</legend>
                             
                                  <input
                                  type="radio"
                                  onChange={handleChange}
                                  name="itemMode"
                                  id="Online-Mode"
                                  value="Online-Mode"
                                  checked={formData.itemMode === "Online-Mode"}

                                />
                                <label htmlFor='Online-Mode' style={{ marginRight: '1rem', marginLeft:'0.25rem'}}>Online</label>
                              
                            {/* if all radio button have same name,
                            then we can tick all radio button at same time  */}

                           
                              <input
                                type="radio"
                                onChange={handleChange}
                                name="itemMode"
                                id="Offline-Mode"
                                value="Offline-Mode"
                                checked={formData.itemMode === "Offline-Mode"}
                                
                              />
                              <label htmlFor='Offline-Mode' style={{marginLeft:'0.25rem'}}>Offline</label>
                            
                            </fieldset>
                        </div>

                        <button className='login-btn' style={{ backgroundColor: "black"}} type="submit">
                         Add Item
                        </button>
                        <br/>
                        <hr />
                        {/* <div>
                             Not a member?
                             <br/>
                             <Link to="/signup" className="sign-up-cta">Create a new account</Link>
                        </div> */}

                        
                    </form>
         </div>
    </div>
  )
}

export default AdminHome