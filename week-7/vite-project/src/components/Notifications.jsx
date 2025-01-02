import { useState } from "react";

export default function Bell(){
    const [count, setCount]=useState(0);

    return(
        <div style={{backgroundColor: 'beige', color: 'brown', padding: 10}}>
            <button style={{backgroundColor: 'brown', color: 'beige', padding: 10}} 
            onClick={()=>{
                setCount(count+1)
            }}>Notifications {count}</button>
        </div>
    )
}