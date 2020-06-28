import React, { useState } from "react";
import Tweet from "./Tweet";

export default function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // };

    // // Example of how to handle user data that could come from an API
  const [users, setUsers] = useState([
    {
      name: "Oscar",
      message: "Hello there",
    },
    {
      name: "John",
      message: "I am John Snow",
    },
    {
      name: "Traversy",
      message: "I am awesome",
    }
  ]);

  return (
    <div className="app">
      {/* <Tweet name="Oscar" message="This is a random tweet" numberOfLikes="30" />
      <Tweet name="John Snow" message="I am the true king" numberOfLikes="5" />
      <Tweet name="Traversy Media" message="700k my dudes" numberOfLikes="76" />
      <Tweet
        name="Mosh"
        message="My new course is available"
        numberOfLikes="450"
      /> */}
      {/* <h1 className={isRed ? "red" : ""}> Change my color!</h1>
      <button onClick={increment}> Increment </button>
      <h1>{count}</h1> */}
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}
