import React from "react";
import ReactDOM from "react-dom/client";
const heading = document.createElement("h1"); //, {}, "Hello world from Js");
const root = document.getElementById("root");
heading.innerHTML = "Hello world from react";

const headingR = React.createElement(
	"h1",
	{ id: "heading" },
	"HELLO WORLD FROM REACT"
);

const r = ReactDOM.createRoot(root);
r.render(headingR);
console.log(root);
