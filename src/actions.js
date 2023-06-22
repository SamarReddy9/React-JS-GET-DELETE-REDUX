// actions.js
import * as types from './constants';

export const fetchDataSuccess = (data) => ({
  type: types.FETCH_DATA_SUCCESS,
  payload: data,
});

export const deleteDataSuccess = (id) => ({
  type: types.DELETE_DATA_SUCCESS,
  payload: id,
});

export const fetchData = () => {
  return (dispatch) => {
    fetch('https://63ed118e3d9c852c3f5581f8.mockapi.io/posts/posts')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteData = (id) => {
  return (dispatch) => {
    fetch(`https://63ed118e3d9c852c3f5581f8.mockapi.io/posts/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          dispatch(deleteDataSuccess(id));
        } else {
          console.log('Error deleting data');
        }
      })
      .catch((error) => console.log(error));
  };
};
