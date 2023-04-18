import { useState, useEffect } from 'react';
import Content from './Content';
import Header from './Header';
import Total from './Total'; 

function App({ courseData }) {
  const calculateExerciseTotal = () => course.parts.reduce((counter, part) => counter + part.exercises, 0)

  // States
  const [course, updateCourse] = useState(courseData);
  const [newTopic, setNewTopic] = useState('');
  const [exerciseTotal, setExerciseTotal] = useState(calculateExerciseTotal);

  // Use Effect
  useEffect(() => {
    console.log("update topics total");
    setExerciseTotal(calculateExerciseTotal());
  }, [course]);

  // Functions
  const handleSubmit = (event) => {
    console.log("Submit");
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exerciseTotal={ exerciseTotal }/>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name:</label><br />
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Exercises:</label><br />
          <input type="number" />
        </div>
        <br />
        <button type="submit">Add topic</button>
      </form>
    </div>
  );
}

export default App;
