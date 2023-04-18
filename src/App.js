import { useState, useEffect } from 'react';
import Content from './Content';
import Header from './Header';
import Total from './Total'; 
import { type } from '@testing-library/user-event/dist/type';

function App({ courseData }) {
  const calculateExerciseTotal = () => course.parts.reduce((counter, part) => counter + part.exercises, 0)

  // States
  const [course, updateCourse] = useState(courseData);
  const [newTopic, setNewTopic] = useState({name: "", exercises: ""});
  const [exerciseTotal, setExerciseTotal] = useState(calculateExerciseTotal);

  // Use Effect
  useEffect(() => {
    setExerciseTotal(calculateExerciseTotal());
  }, [course]);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New topic: ", newTopic);

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
      setNewTopic({name: "", exercises: 0});
    }
  }

  const handleChange = (e) => {
    // if(e.target.value !== undefined) {
    //   (e.target.id === 'name') ? setNewTopic({...newTopic,name: e.target.value}) : setNewTopic({...newTopic,exercises: parseInt(e.target.value, 10)}); 
    // } else {
    //   console.log("No value");
    // }
    if (e.target.value !== undefined) {
      if (e.target.id === 'name') {
        setNewTopic({...newTopic, name: e.target.value})
      } else if (!isNaN(parseInt(e.target.value, 10))) {
        setNewTopic({...newTopic, exercises: parseInt(e.target.value, 10)})
      }
    } else {
      console.log("No value");
    }
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exerciseTotal={ exerciseTotal }/>

      <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default App;
