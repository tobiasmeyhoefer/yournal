"use client"

import { useState } from "react";

const ThoughtText = ({ thought }: { thought: string }) => {

  const [showFullThought, setShowFullThought] = useState(false);
  
  // let showFullThought = false;
  const toogleShowFullThought = () => {
    console.log(showFullThought)
    setShowFullThought(!showFullThought);
  }

  if(thought.length > 300 && !showFullThought) {
    return(
      <p>{thought.substring(0, 300)}... <span className="text-blue-600 cursor-pointer" onClick={toogleShowFullThought}>mehr</span></p>
    )
  } else {
    return (
      <p>{thought}</p>
    )
  }
}

export default ThoughtText
