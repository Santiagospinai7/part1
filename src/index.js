import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Data
const COURSE = {
  name: 'Web Development course',
  parts: [
      {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      id: 3,
      name: 'State of a component',
      exercises: 14
      }
  ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App courseData={COURSE}/>
);

