import { useState, useEffect } from 'react';

import Reviews from './Reviews';
import LoginForm from './Components/LoginFrom';
import CreateReviewForm from './Components/CreateReviewForm';

import { getAllReviews, createReview } from './services/reviews.js';
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
      getAllReviews().then(reviews => {
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

      createReview(createNewReview, {token: user.token})
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

      {user ? <p>{user.name} logged-in</p> : <p>Not logged in</p>}
      {user === null 
        ? <LoginForm handleLoginSubmit={handleLoginSubmit} handleChangeUserName={[username, setUsername, password, setPassword]}/> 
        : <CreateReviewForm handleReviewSubmit={handleReviewSubmit} handleChangeReview={[newReview, setNewReview]}/> 
      }

      <Reviews reviews={reviews} isLoading={isLoading}/>
    </div>
  );
}

export default App;
