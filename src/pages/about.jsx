import React, { Component } from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer";
import "./about.css"
class About extends Component {

  
    render() {
        return (
            <div className="">
                <Navbar page="about"/>

                <h1 className="title">Welcome to chqn.xyz</h1>
                <div className="body">
                    Hi, I am chqn. I used this website to quickly learn some react concepts for a new job, but I also used it to implement an idea I have had for a while now. What if there was a message board where your IP address is associated with what you say. Would that change people's behavior in any meaningful way? Eventually I would like to make it a roulette on if your IP address actually gets posted with your message, but for now it is a blanket rule.
            </div>
                <div className="body">
                    <h2>Guidelines, rules, etc</h2>
                    <ul>
                        <li>Site administrators can delete your messages at their discression; Do not get an illusion of "free speech" existing here. With that said, we are pretty lax on what stays and what goes, and we will not edit the content or metadata of message. Messages are either deleted or retained in their original form.</li> 
                        <li>Hateful language and/or content will result in an IP ban. There is no appeal process or warnings and bans are permenant. If you want to bitch about the consequences of your actions feel free to email a@chqn.xyz; you will almost definitely not get a response and it will be a waste of your time.</li> 
                        <li>There is not a defined topic of discussion on this board, feel free to talk about whatever barring the guidelines above.</li> 
                        <li>These clauses can be modified, deleted, and appended to at any time, and rules can apply retroactively. The content of the site should reflect the current rules and guidelines.</li>
                    </ul>
                    <h2>contact site administrators</h2>
                    Email a@chqn.xyz with feature requests and whatever else
                    <h2>What is evil, inc?</h2>
                    I made it up. It is complete fiction.

                </div>
                <Footer/>
            </div>
        )
    }
}


export default About;
