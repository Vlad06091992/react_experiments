import React from "react";
import { useEffect, useLayoutEffect, useReducer } from "react";

 const App = () => {
   const [num, triggerRerender] = useReducer((v) => v + 1, 0);

   (window as any).triggerRerender = triggerRerender;

   console.log("parent: render");


   useEffect(() => {
     debugger
     console.log("parent: effect");
     return () => {
       console.log("parent: cleanup effect");
     };
   }, [num]);

   useLayoutEffect(() => {
     debugger
     console.log("parent: layout effect");
     return () => {
       console.log("parent: cleanup layout effect");
     };
   }, [num]);

   return (
       <>
         <div>parent</div>
         <div>{num}</div>
         <button onClick={triggerRerender}>parent</button>
         <Child num={num}/>;
       </>
   )

 }


const Child = ({ num }: { num: number }) => {
  console.log("child: render");

  useLayoutEffect(() => {
    debugger
    console.log("child: layout effect");
    return () => {
      console.log("child: cleanup layout effect");
    };
  }, [num]);

  useEffect(() => {
    debugger
    console.log("child: effect");
    return () => {
      console.log("child: cleanup effect");
    };
  }, [num]);

  return <div>
    child
    <div>{num}</div>
  </div>;
};

export default App
