import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question,setQuestion]=useState(data)
  return (
    <main>
      <div className="container">
        <h3>Question and answer about Login</h3>
        <section className="info">
          {question.map((item) => (
            <SingleQuestion key={item.id} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
