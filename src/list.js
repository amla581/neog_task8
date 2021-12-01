import React from "react";
import "./styles.css";

var shoppingList = ["milk", "eggs", "bread", "flowers","meggi","rice","choumin","momo","biscuit"]; // add 5 more things

export default function App() {
  return (
    <div className="App">
      <h1>print my shopping List</h1>
      <ul>
        {shoppingList.map(function(item){
          return <li>{item}</li>
        })}
        </ul>
    </div>
  );
}