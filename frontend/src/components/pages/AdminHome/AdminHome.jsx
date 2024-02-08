import React from 'react';
import './AdminHome.css';

function AdminHome() {

    const handleSubmit = () => {
        console.log("helllo to Ad")
    }

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
                            class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="itemPrice">Item Price</label>
                            <input 
                            placeholder="123" 
                            type="number" 
                            name="itemPrice" 
                            id="itemPrice" 
                            class="form-control" />
                        </div>

                        <div class="mb-3">
                          <label class="form-label" for='itemType'>Item Type </label>
                          <select
                          // onChange={changeHandler}
                          name="itemType"
                          id="itemType"
                          class="form-control"
                          // value={formData.favCar}
                          >

                          <option value="fruits">Fruits</option>
                          <option value="vegetable">Vegetable</option>
                          <option value="clothes">Clothes</option>
                          <option value="electronics">Electronics</option>
                          <option value="utensils">Utensils</option>

                          </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="itemImage">Upload Image</label>
                            <input 
                            // placeholder="123" 
                            type="file" 
                            name="itemImage" 
                            id="itemImage" 
                            class="form-control" />
                        </div>

                        <div class="mb-3">
                            <fieldset>
                              {/* <label class="form-label">Mode: </label> */}
                              
                              <legend style={{ fontSize: '1rem'}}>Mode</legend>
                             
                                  <input
                                  type="radio"
                                  // onChange={changeHandler}
                                  name="mode"
                                  id="Online-Mode"
                                  value="Online-Mode"
                                  // checked={formData.mode === "Online-Mode"}

                                />
                                <label htmlFor='Online-Mode' style={{ marginRight: '1rem', marginLeft:'0.25rem'}}>Online</label>
                              
                            {/* if all radio button have same name,
                            then we can tick all radio button at same time  */}

                           
                              <input
                                type="radio"
                                // onChange={changeHandler}
                                name="mode"
                                id="Offline-Mode"
                                value="Offline-Mode"
                                // checked={formData.mode === "Offline-Mode"}

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