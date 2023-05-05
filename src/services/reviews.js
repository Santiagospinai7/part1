import axios from 'axios';
const BASE_URL = "http://localhost:3001/api/reviews/";

export const getAllReviews = () => {
  const request = axios.get(BASE_URL);
  return request.then(response => response.data);
};

export const createReview = ( newObject, { token } ) => {
  const config = {
    headers : { 
      Authorization: `bearer ${token}` 
    }
  }

  console.log("newObject", newObject);
  const request = axios.post(BASE_URL, newObject, config);
  return request.then(response => response.data);
};

export const update = (id, newObject) => {
  const request = axios.put(`${BASE_URL}/${id}`, newObject);
  return request.then(response => response.data);
};
