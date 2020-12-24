import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';


var mountNode = document.getElementById("app");
ReactDOM.render(<App></App>, mountNode)