import React,{useState} from "react";
import OddEventResult from "./OddEventResult";

const Counter= ({initialValue})=>{

    const [count,setcount] = useState(initialValue);

    const onIncrease = ()=>{
        setcount(count +1);
    };
    const onDecrease=()=>{
        setcount(count-1);
    };

    return(
    <div>
    <h2>{count}</h2>
    <button onClick={onIncrease}>+</button>
    <button onClick={onDecrease}>-</button>
    <OddEventResult count ={count}/>
    </div>
    );
};
      
Counter.defaultProps = {
    initialValue:0
}

export default Counter;