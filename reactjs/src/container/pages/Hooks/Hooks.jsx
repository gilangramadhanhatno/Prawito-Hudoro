import React, { useState } from "react";

import "./Hooks.css";

export default function Hooks() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-hooks">
      <p>Nilai Saya saat ini adalah : {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Nilai</button>
    </div>
  );
}
