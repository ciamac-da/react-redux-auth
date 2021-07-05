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
        <button onClick={decrementHandler} className={classes.btn}>Decrement</button>
        <button onClick={incrementHandler} className={classes.btn}>Increment</button>
      </div>
      <div>
        <button onClick={decreaseHandler} className={classes.btn}>Decrease by 5</button>
        <button onClick={increaseHandler} className={classes.btn}>Increase by 5</button>
      </div>

      <button onClick={toggleCounterHandler} className={classes.btn}>Toggle Counter</button>
    </main>
  );
};

export default Counter;