import  React  from 'react';
import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector( state => state.counter)


  const increment = () => {
    dispatch({type:"INCREMENT"})
  }
  const decrement = () => {
    dispatch({type:"DECREMENT"})
  }


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
