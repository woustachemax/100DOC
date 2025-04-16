"use client"

import { useState } from "react"

export default function Interaction(){
    const [count, setCount] = useState(0);



    return <div className="m-4">
            <div className="font-extrabold text-3xl">
            Welcome to Interactive Page
            </div><br />
            <div>
            This route features a count button that demonstrates the power of client-side interactivity in Next.js. Click the button and see the count go up! This interactive feature is powered by the "use client" directive in Next.js, which allows this component to be rendered on the client-side.
            </div><br />
            <button onClick = {()=>setCount(count+1)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-gray-200 text-gray-900 rounded-lg border-gray-500 border-2">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-600 rounded-md hover:bg-gray-200">
                    Count {count}
                </span>
            </button>
            <button onClick = {()=>setCount(0)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-gray-200 text-gray-900 rounded-lg border-gray-500 border-2">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-600 rounded-md hover:bg-gray-200">
                    Reset
                </span>
            </button>

         </div>
}

