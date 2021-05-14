import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { createCropAction } from '../../redux/actions/crops/cropActions';


const AddCrop = () => {
    const [category, setCategory] = useState('');
    const [productname, setProductname] = useState('');
    const [farmersname, setFarmersname] = useState('');
    const [farmersnumber, setFarmersnumber] = useState('');

    //dispatch
     const dispatch = useDispatch();

    //Handle form submit
     const handleFormSubmit = e => {
         e.preventDefault();

         const data ={
             category,
             productname,
             farmersname,
             farmersnumber,
         };
         dispatch(createCropAction(data));


     };
     
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            Click to Add/Upload your Products.
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    ADD PRODUCTS
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <h1 className='text-center'>Add Crop</h1>
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                      <div className='form-group'>
                        <select 
                         value={category}
                         onChange={e => setCategory(e.target.value)}
                         className='custom-select'>
                          <option defaultValue='Rabi'>
                            Rabi
                          </option>
                          <option on value='Kharif'>Kharif</option>
                          <option value='Zaid'>zaid</option>
                          <option value='others'>others</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Product's Name </label>
                        <input
                           value={productname}
                           onChange={e => setProductname(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Product Name '
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Farmer's Name</label>
                        <input
                         value={farmersname}
                         onChange={e => setFarmersname(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Farmer Name'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Farmer's Mobile Number</label>
                        <input
                         value={farmersnumber}
                         onChange={e => setFarmersnumber(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Mobile Number'
                        />
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        SAVE DETAILS
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddCrop;