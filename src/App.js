import React, {useState} from "react";
import Tweet from "./Tweet"

export default function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  return( 
    <div className="app">
       <Tweet name="Oscar" message="This is a random tweet" numberOfLikes="30"/>
       <Tweet name="John Snow" message="I am the true king" numberOfLikes="5"/>
       <Tweet name="Traversy Media" message="700k my dudes" numberOfLikes="76"/>
       <Tweet name="Mosh" message="My new course is available" numberOfLikes="450"/>
    </div>
  )
}