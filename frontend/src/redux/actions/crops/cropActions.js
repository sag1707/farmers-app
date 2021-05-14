//import { CREATE_CROP_FAIL, CREATE_CROP_REQUEST, CREATE_CROP_SUCCESS, DELETE_CROP_REQUEST } from "../crops/actionTypes";
import axios from 'axios';
import {   CREATE_CROP_FAIL,
    CREATE_CROP_REQUEST,
    CREATE_CROP_SUCCESS,
    FETCH_CROP_FAIL,
    FETCH_CROP_REQUEST,
    FETCH_CROP_SUCCESS,
    DELETE_CROP_FAIL,
    DELETE_CROP_SUCCESS,
    DELETE_CROP_REQUEST,
    BOOK_DETAIL_SUCCESS,
    BOOK_DETAIL_FAIL,
    BOOK_DETAIL_REQUEST,
    BOOK_UPDATE_SUCCESS,
    BOOK_UPDATE_REQUEST,
    BOOK_UPDATE_FAIL,} from "../crops/actionTypes";


const createCropAction = (cropData) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_CROP_REQUEST,
            });

            const config = {
                'Content-Type': 'application/json',
            };
            const { data } = await axios.post('/api/crops', cropData, config);

            dispatch({
                type: CREATE_CROP_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: CREATE_CROP_FAIL,
                payload: error.response && error.response.data.message,
            });

        };
    };
};

//fetch all crops actions
const fetchCropsAction = () => {
  return async dispatch => {
      try {
          dispatch({
              type: FETCH_CROP_REQUEST,
              loading: true,
          });

          const config ={
              headers : {
                'Content-Type': 'application/json',
              },
          };

          //make HTTP call to our backend
           const {data} = await axios.get('/api/crops', config);
           dispatch({
               type: FETCH_CROP_SUCCESS,
               payload: data,
           });

      } catch (error) {
          dispatch({
              type: FETCH_CROP_FAIL,
              payload:error.response && error.response.data.message,
          });
          
      };
  };

}
//delete a product/crop

export const deleteCrop = id => {
    return async dispatch => {
      try {
        dispatch({
          type: DELETE_CROP_REQUEST,
          loading: true,
        });
  
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const { data } = await axios.delete(`/api/crops/${id}`, config);
        dispatch({
          type: DELETE_CROP_SUCCESS,
          payload: data,
        });
  
        dispatch({
          type: FETCH_CROP_SUCCESS,
        });
      } catch (error) {
        dispatch({
          type: DELETE_CROP_FAIL,
          loading: false,
          error: error.response && error.response.data.message,
        });
      }
    };
  };

export { createCropAction };
export { fetchCropsAction };