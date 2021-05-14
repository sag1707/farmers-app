import { FETCH_CROP_REQUEST } from "../../actions/crops/actionTypes";
import { FETCH_CROP_FAIL, FETCH_CROP_SUCCESS } from "../../actions/crops/actionTypes";


const cropListReducer = (state = [],action) => {
    switch (action.type){
         case FETCH_CROP_REQUEST:
             return {
                 loading: true,
             };
             case FETCH_CROP_SUCCESS:
                 return{
                     crop: action.payload,
                 };

             case FETCH_CROP_FAIL:
                 return {
                     loading: false,
                     error: action.payload,
                 };
            default:
                 return state;

    }
};

export { cropListReducer };