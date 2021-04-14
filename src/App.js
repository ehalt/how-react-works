import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayoks(data))
    }, [])
  // const nayoks = [{name: 'jashim', age: 53}, {name:'karim', age: 34},{name:'rakib', age: 32},{name:'shakib', age: 21},{name:'khanna manna', age: 88},{name:'dhola mama', age: 55}]
  return (
    <div className="App">
      <br/> <br/>
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age} ></Nayok>)
      }
    </div>
  );
}

// nayok function here 
function Nayok(props){
  // console.log(props.name)
  const nayokStyle = {
    border: '2px solid purple',
    margin: '10px'
  }
  return(
    <div style={nayokStyle}>
      <h1>Ami khol nayok- {props.name}</h1>
      <h3>I have done 5 movie in {props.age} </h3>
    </div>
  )
}

// movie counter function 

function MovieCounter(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  // const count = 5;
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h5>Numner of movies: {count} </h5>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}

export default App;
