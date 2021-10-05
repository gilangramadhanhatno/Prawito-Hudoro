import React from "react";
import "./YoutubeComp.css";

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://i.ytimg.com/vi/GBvnzRwoizo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBnec4RD8v4qX6FAjI8yRo9Q0jaQw" alt="Tutorial Belajar React JS" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

export default YoutubeComp;
