import {useState} from 'react';
export default function CountState(){

let[count,setCount] = useState(0);

   function increaseCount(){
    setCount(count+1);
    
  }
 return (
   <div>
   <h1>Count:{count}</h1>
  <button onClick={increaseCount}>Increase</button>
     
   </div>
 );
  
}







