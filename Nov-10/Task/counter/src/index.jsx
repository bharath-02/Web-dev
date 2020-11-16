import React from 'react';
import ReactDOM from 'react-dom';

const Counter = ({count, increment, decrement, removecounter}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => removecounter()}>Delete Counter</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  )
}


const CounterApp = () => {
  const [counts, setCounts] = React.useState([0]);

  const addCounter = () => {
    console.log(counts);
    const newCounts = counts.concat([0]);
    console.log(newCounts)
    setCounts(newCounts);
  }

  const removeCounter = (currIndex) => {
    const newCounts = counts.filter((val, index) => index!==currIndex);
    setCounts(newCounts);
  }

  const increment = (currIndex) => {
    const newCounts = counts.map((value, index) => index === currIndex ? value+1 : value);
    setCounts(newCounts);
  }

  const decrement = (currIndex) => {
    const newCounts = counts.map((value, index) => index === currIndex ? value-1 : value);
    setCounts(newCounts);
  }

  
  return (
    <div style={{textAlign: "center"}}>
      {counts.map((element, index) => <Counter count={element} increment={() => increment(index)} decrement={() => decrement(index)}  removecounter={() => removeCounter(index)} /> )}
      <br /><br />
      <button onClick={addCounter}>Add Counter</button>
    </div>
  )
}

ReactDOM.render(<CounterApp />, document.getElementById('root'));
