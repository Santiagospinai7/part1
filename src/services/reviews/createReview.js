import axios  from 'axios';

export const createReview = async ({ title, content, userId}) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", { title, content, userId })
        .then((response) => {
          const { data } = response;
          return data;
        })
}
