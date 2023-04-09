function App() {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ];

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={friends[0].name} age={friends[0].age} />
      <Hello name={friends[1].name} age={friends[1].age} />
      <Footer />
    </>
  );
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you're {props.age}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greetings app created by <a href="https://github.com/Santiagospinai7">Santiagospinai7</a>
    </div>
  )
}

export default App;
