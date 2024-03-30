import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
const linkedIn = document.getElementById("linkedin")



ReactDOM.render(<App />, document.getElementById("root"))

linkedin.addEventListener("click", function(){
    const url = "https://www.linkedin.com/in/marcus-ammirati-095a42111/"
            window.open (url, "_blank")
        })
        



