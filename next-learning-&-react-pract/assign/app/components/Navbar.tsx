"use client"
import { useRouter } from 'next/navigation'


export default function Nav(){
    const router = useRouter()

   return <div className="grid grid-cols-3 gap-5 my-36 mx-132">
   <div className="">
    <button onClick = {()=> router.push('/')}className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-gray-200 text-gray-900 rounded-lg border-gray-500 border-2 ">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-600 rounded-md hover:bg-gray-200">
            Home
        </span>
    </button>
    </div>

   <div className="">
   <button  onClick = {()=> router.push('/static-page')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-gray-200 text-gray-900 rounded-lg border-gray-500 border-2">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-600 rounded-md hover:bg-gray-200">
            Server Page
        </span>
    </button>
    </div>

   <div className="">
    <button onClick ={()=>router.push('/interactive-page')}className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-gray-200 text-gray-900 rounded-lg border-gray-500 border-2">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-600 rounded-md hover:bg-gray-200">
            Client Page
        </span>
    </button>
    </div>
 </div>
 
}