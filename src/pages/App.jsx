import React, { Component } from "react"
import Navbar from "../components/navbar"
import Comment from "../components/comment"
import ChildComment from "../components/childcomment"
import ComposeComment from "../components/composecomment"
import Footer from "../components/footer"
import "./App.css"
class App extends Component {
     
    constructor(props) {
        super(props);
        this.state = { allComments: [] };
    }
    

    getAllComments() {
        fetch("http://localhost:9000/comments")
            .then(res => res.json())
            .then((data) => this.setState( {allComments: data} ));
    }

    componentDidMount() {
        this.getAllComments();
    }

    render() {
        return (
            <div className="comments">
                <Navbar page="home"/>
                <div className="badge-holder">
                    <img src="badge.png" className="badge" alt="badge"/>
                </div>
                <ComposeComment/>

                    {/* Render comments and their children */}
                    {this.state.allComments.reverse().map((comment, index) => (
                        <div key={index}>
                            <Comment id={this.state.allComments.length - index} title={comment.title} ip={comment.ip_address} date={comment.date} body={comment.body}/>
                            {/* Render child comments if available */}
                            {comment.children && comment.children.reverse().map((child, childIndex) => (
                                <ChildComment date={child.date} ip={child.ip_address} body={child.body} />
                            ))}
                        </div>
                ))}
                <Footer/>
            </div>
        )
    }
}

export default App;
