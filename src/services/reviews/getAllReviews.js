import axios from 'axios';

export const getAllReviews = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    // recover data from response
    const { data } = response;
    return data;
  })
}
