import React from "react"

export default function Info(){
    return(
        <header>
            <img className = "headshot" src="./Headshot.jpeg"/>
            <h1 className="name">Marcus Ammirati</h1>
            <p className="job-title">Frontend Developer</p>
            <p className= "website">mammirati.website</p>
            <button className="email-button" id="email-btn">
                <i className="fa-solid fa-envelope"></i>
                <span>Email</span>
            </button>
            <button className="linkedin-button" id="linkedin">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
            </button>
        </header> 
    )
}