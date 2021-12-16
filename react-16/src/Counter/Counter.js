import { incrAction, decrAction } from "../redux/Counter/counter.action";
import { useDispatch, useSelector } from "react-redux";
let Counter = () => {
  let dispatch = useDispatch();
  let storeCounter = useSelector((state) => {
    return state.counter;
  });
  let incrHandler = () => {
    //dispatch action
    dispatch(incrAction());
  };
  let decrHanlder = () => {
    //dispatch action
    dispatch(decrAction());
  };
  return (
    <>
      <h1>Counter Example</h1>

      <h2>Counter Value: {storeCounter.counter}</h2>
      <pre>{JSON.stringify(storeCounter)}</pre>
      <button onClick={incrHandler}>Incr</button>
      <button onClick={decrHanlder}>Decr</button>
    </>
  );
};
export default Counter;
