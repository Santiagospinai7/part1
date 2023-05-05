import { useState, useEffect } from 'react';

import Reviews from './Reviews';
import LoginForm from './Components/LoginFrom';
import CreateReviewForm from './Components/CreateReviewForm';

import { getAll, create } from './services/reviews.js';
import { login } from './services/login';

function App() {
  // States
  const [reviews, updateReviews] = useState([]);
  const [newReview, setNewReview] = useState({title: "", description: ""});
  
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // Fetch data
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      getAll().then(reviews => {
        updateReviews(reviews);
        setLoading(false);
      })
    }, 1000);
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.length === 0 || newReview.title === "" || newReview.description === "") {
      console.log("No new Review");
      return;
    } else {
      const createNewReview = {
        title: newReview.title,
        content: newReview.description
      }

      create(createNewReview)
        .then((data) => {
          updateReviews((prevReviews) => [...prevReviews, data]);
        })

      setNewReview({title: "", description: ""});
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    console.log('login submit')

    try {
      const user = await login({ username, password });

      console.log(user)

      setUser(user);
      setUsername('');
      setPassword('');
    } catch (error) {
      setError('Wrong credentials');
      setTimeout(() => {
        setError(null)
      }
      , 5000);
    }
  }

  return (
    <div>

      <p>Error: {error}</p>

      <LoginForm handleLoginSubmit={handleLoginSubmit} handleChangeUserName={[username, setUsername, password, setPassword]}/>

      <Reviews reviews={reviews} isLoading={isLoading}/>

      <p>review Title: {newReview.title}</p>
      <p>review Description: {newReview.description}</p>

      <CreateReviewForm handleReviewSubmit={handleReviewSubmit} handleChangeReview={[newReview, setNewReview]}/>
    </div>
  );
}

export default App;
