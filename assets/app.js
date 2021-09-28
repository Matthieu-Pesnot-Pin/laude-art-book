/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

// console.log("window.listeImages", window.listeImages);



import React from "react";
import ReactDOM from "react-dom";

import App from "./components/Home";

ReactDOM.render(<App />, document.getElementById("root"));

// hot reloading. It works by replacing a module of the application 
// during runtime with an updated one so that it’s available for instant use.
// module.hot.accept();

