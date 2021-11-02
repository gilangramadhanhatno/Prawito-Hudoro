import React from "react";

export default function Button({ title, onClick, loading }) {
  if (loading) {
    return <button className="btn disabled">Loading...</button>;
  }
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
}
