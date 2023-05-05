import axios from 'axios';
const BASE_URL = "http://localhost:3001/api/reviews/";

let token = null;

export const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

export const getAllReviews = () => {
  const request = axios.get(BASE_URL);
  return request.then(response => response.data);
};

export const createReview = (newObject) => {
  const config = {
    headers : { 
      Authorization: token
    }
  }

  console.log("newObject", newObject);
  const request = axios.post(BASE_URL, newObject, config);
  return request.then(response => response.data);
};

export const update = (id, newObject) => {
  const config = {
    headers : { 
      Authorization: token
    }
  }

  const request = axios.put(`${BASE_URL}/${id}`, newObject, config);
  return request.then(response => response.data);
};
