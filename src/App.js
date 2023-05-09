import { useState, useEffect } from 'react'

import Reviews from './Reviews'
import LoginForm from './Components/LoginFrom'
import CreateReviewForm from './Components/CreateReviewForm'

import { getAllReviews, createReview, setToken } from './services/reviews.js'
import { login } from './services/login'

function App() {
  // States
  const [reviews, updateReviews] = useState([])
  
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  // Fetch data
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      getAllReviews().then(reviews => {
        updateReviews(reviews);
        setLoading(false);
      })
    }, 1000);
  }, [])

  // Read Local Storage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedReviewAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('loggedReviewAppUser')
    setUser(null)
  }

  const addReview = (reviewObject) => {
    createReview(reviewObject)
      .then((returnedReview) => {
        // setNewReview(reviews.concat(returnedReview));
        updateReviews((prevReviews) => [...prevReviews, returnedReview]);
      });
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    console.log('login submit')

    try {
      const user = await login({ username, password });

      window.localStorage.setItem(
        'loggedReviewAppUser', JSON.stringify(user)
      );
      
      setToken(user.token);

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
        : <CreateReviewForm addReview={addReview} /> 
      }
      <button onClick={handleLogout}>Logout</button>

      <Reviews reviews={reviews} isLoading={isLoading}/>
    </div>
  )
}

export default App
