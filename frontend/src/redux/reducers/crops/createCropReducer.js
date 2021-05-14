import { CREATE_CROP_FAIL, CREATE_CROP_REQUEST, CREATE_CROP_SUCCESS } from "../../actions/crops/actionTypes";

const createCropReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CROP_REQUEST:
            return {
                loading: true,
            };
        case CREATE_CROP_SUCCESS:
            return {
                crop: action.payload,
            };
        case CREATE_CROP_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export { createCropReducer };