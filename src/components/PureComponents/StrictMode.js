import React from 'react'
let guest = 0;

function StrictMode() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default StrictMode;