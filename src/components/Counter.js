import  React  from 'react';
import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector( state => state.counter)
  const showCounter = useSelector( state => state.showCounter)


  const incrementHandler = () => {
    dispatch({type:"INCREMENT"})
  }
  const decrementHandler = () => {
    dispatch({type:"DECREMENT"})
  }

  const increaseHandler = () => {
    dispatch({type:"INCREASE", amount: 5})
  }

  const decreaseHandler = () => {
    dispatch({type:"DECREASE", amount: 5})
  }

  const toggleCounterHandler = () => {
    dispatch({type:"TOGGLE"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <div>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;