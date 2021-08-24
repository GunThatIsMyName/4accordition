import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [selected,setSelected]=useState(false);
  const handleClick =()=>{
      setSelected(!selected)
  }
  return <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={handleClick} className="btn">{selected?<AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      {selected?<p>{info}</p>:""}
    </article>;
};

export default Question;
