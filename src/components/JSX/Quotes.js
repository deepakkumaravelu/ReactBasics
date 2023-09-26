import React from 'react'
const arr=["“You should imagine variables as tentacles, rather than boxes. They do not contain values; they grasp them—two variables can refer to the same value.”","“You’re building your own maze, in a way, and you might just get lost in it.”","“Reusability is key in reducing bugs and coding quickly. The more I use a piece of code, the more confident and familiar I become with it, which in turn significantly speeds up my development time.”"];

const Quotes = () => {
const num=Math.floor(Math.random()*3);
  return (
    <h1>{arr[num]}</h1>
  );
}

export default Quotes;