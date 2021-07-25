import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {MyState,MyDispatch} from './store'

function App() {
  
   const dolphins = useSelector((state: MyState) => state.dolphins)
   const sharks = useSelector((state:MyState) => state.sharks)
   const dispatch = useDispatch<MyDispatch>()

  return (
    <div className="App">
        <h3>{dolphins}</h3>
        <button onClick = {() => dispatch.dolphins.increment(1)}>+1</button>
        <button onClick = {() => dispatch.dolphins.increment(2)}>+2</button>   
        <button onClick = {() => dispatch.dolphins.incrementAsync()}>+1</button>
        <h4>{sharks}</h4>
        <button onClick = {()=> dispatch.sharks.increment()}>+1</button>
    </div>
  );
}

export default App;
