import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
    
      <div
        className="min-w-full min-h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center gap-2 bottom-12 inset-x-0 px-2 "
        >
         
         <div className="flex flex-wrap  gap-3 shadow-lg bg-white px-3 py-1 rounded-3xl">
          <button 
          onClick={()=> setcolor("red")}// using callback function
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}> Red</button>
           </div>
         <div className="flex flex-wrap  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=> setcolor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}> Green</button>
           </div>
         <div className="flex flex-wrap  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setcolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}> Blue</button>
           </div>
         <div className="flex flex-wrap  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setcolor("brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}> brown  </button>
           </div>
           <div className="flex flex-wrap  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=> setcolor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}}> Pink</button>
           </div>
         <div className="flex flex-wrap  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=> setcolor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}> black</button>
           </div>
        </div>
      </div>
    </>
  );
}

export default App;
