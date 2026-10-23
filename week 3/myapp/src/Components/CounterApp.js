import { useState } from "react";

function CounterApp() {
const [count, setCount] = useState(0);

return (
<div style={{ textAlign: "center",marginTop:"80px"}}>
<h1>Counter: {count}</h1>
<button onClick={() => setCount(count + 1)}style={{marginLeft:"15px",backgroundColor:"green",borderRadius:"9px"}}>+Increment</button>
<button onClick={() => setCount(count - 1)}style={{marginLeft:"15px",backgroundColor:"red", borderRadius:"9px"}}>- Decrement</button>
<p>Try clicking the buttons.</p>
</div>
);
}

export default CounterApp;