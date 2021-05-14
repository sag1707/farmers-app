
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCropsAction } from '../../redux/actions/crops/cropActions';
import Loading from '../Loading/Loading';
const Crop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchCropsAction());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  const { crops, loading } = useSelector(state => {
    return state.cropsList;
  });
  console.log(crops);
  console.log(loading);

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>
              <tr>
              <th scope='col'>Product Name</th>
                 <th scope='col'>Farmer Name</th>
                 <th scope='col'>Farmer Number</th>
                 <th scope='col'>Type Of Crop</th>
                 <th scope='col'>Delete Entries</th>
                 <th scope='col'>Update Entries</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {crops &&
                    crops.map(crop => {
                      return (
                        <>
                          {/* Map through here */}
                          <tr className='table-dark'>
                            <th scope='row'>{crop.productname}</th>
                            <td>{crop.farmersname}</td>
                            <td>{crop.farmersnumber}</td>
                            <td>{crop.category}</td>
                            <td>
                              <i
                                className='fas fa-trash '
                                style={{
                                  color: 'red',
                                  cursor: 'progress',
                                }}></i>
                            </td>
                            <td>
                              <i
                                className='far fa-edit'
                                style={{
                                  color: 'yellow',
                                  cursor: 'progress',
                                }}></i>
                            </td>
                          </tr>
                          {/* End of map thr */}
                        </>
                      );
                    })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Crop;





















