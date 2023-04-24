import { useState, useEffect } from 'react';

import Content from './Content';
import Header from './Header';
import Total from './Total'; 
import Reviews from './Reviews';

// import { createReview } from './services/reviews/createReview';
import { getAll, create, update } from './services/reviews.js';


function App({ courseData }) {
  const calculateExerciseTotal = () => course.parts.reduce((counter, part) => counter + part.exercises, 0)

  // States
  const [course, updateCourse] = useState(courseData);
  const [newTopic, setNewTopic] = useState({name: "", exercises: ""});
  const [exerciseTotal, setExerciseTotal] = useState(calculateExerciseTotal);

  const [reviews, updateReviews] = useState([]);
  const [newReview, setNewReview] = useState({title: "", description: ""});
  
  const [isLoading, setLoading] = useState(true);

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

  // Use Effect
  useEffect(() => {
    console.log("rendering again")
    setExerciseTotal(calculateExerciseTotal());
  }, [course]);

  // Functions
  const handleTopicSubmit = (e) => {
    e.preventDefault();

    if (newTopic.length === 0 || newTopic.name === "" || newTopic.exercises === 0 || newTopic.exercises === undefined) {
      console.log("No new topic");
      return;
    } else {
      const createNewTopic = {
        id: course.parts.length + 1,
        name: newTopic.name,
        exercises: newTopic.exercises
      }
      
      updateCourse({...course, parts: [...course.parts, createNewTopic]});
      setNewTopic({name: "", exercises: ""});
    }
  };

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

  const handleChange = (e) => {
    if (e.target.value !== undefined) {
      if (e.target.id === 'name') {
        setNewTopic({...newTopic, name: e.target.value})
      } else if (!isNaN(parseInt(e.target.value, 10))) {
        setNewTopic({...newTopic, exercises: parseInt(e.target.value, 10)})
      }
      if (e.target.id === 'reviewTitle') {
        setNewReview({...newReview, title: e.target.value})
      } else if (e.target.id === 'reviewDescription') {
        setNewReview({...newReview, description: e.target.value})
      }
    } else {
      console.log("No value");
    }
  };

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exerciseTotal={ exerciseTotal }/>

      <br />
      <h2>Add a new Topic</h2>
      <form onSubmit={handleTopicSubmit}>
        <div>
          <label htmlFor='name'>Name:</label><br />
          <input id='name' type="text" value={newTopic.name} placeholder='Name' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='exercises'>Exercises:</label><br />
          <input id='exercises' type="number" value={newTopic.exercises} placeholder='0' onChange={handleChange}/>
        </div>
        <br />
        <button>Add topic</button>
      </form>

      <br />
      <Reviews reviews={reviews} isLoading={isLoading}/>

      <h2>Add a Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label htmlFor='reviewTitle'>Title:</label><br />
          <input id='reviewTitle' type="text" value={newReview.title} placeholder='Title' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='reviewDescription'>Description:</label><br />
          <input id='reviewDescription' type="text" value={newReview.description} placeholder='Type a description' onChange={handleChange}/>
        </div>
        <br />
        <button>Add Review</button>
      </form>
    </div>
  );
}

export default App;
