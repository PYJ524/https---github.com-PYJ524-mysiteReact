import { useState } from "react";

function Counter(){

    // let count = 10;

    let [count, setCount] = useState(0);

    let plus = ()=>{
        count = count+1
        setCount(count);
        console.log(count);
    }
    
    let minus = ()=>{
        count = count-1
        setCount(count);
        console.log(count);
    }
    
    return (
        <div>
            <p><b>{count}</b></p>

            <button type="button" onClick={plus}>더하기</button>
            <button type="button" onClick={minus}>빼기</button>
        </div>
    )
}

export default Counter;