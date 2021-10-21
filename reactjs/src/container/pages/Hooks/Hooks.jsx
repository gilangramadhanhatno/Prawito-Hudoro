import React, { useState, useEffect } from "react";

import "./Hooks.css";

export default function Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title Change : ${count}`;
    return () => {
      document.title = "React JS Hello World";
    };
  });

  return (
    <div className="p-hooks">
      <p>Nilai Saya saat ini adalah : {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Nilai</button>
    </div>
  );
}
