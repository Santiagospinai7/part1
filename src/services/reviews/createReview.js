import axios  from 'axios';

export const createReview = async (review) => {
  console.log(review);
  axios.post("https://jsonplaceholder.typicode.com/posts", review)
        .then(response => {
          const { data } = response;
          return data;
        })
}
