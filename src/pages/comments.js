import React, { Component, useState } from "react"
import Navbar from "../components/navbar"
import Comment from "../components/comment"
import ChildComment from "../components/childcomment"
import ComposeComment from "../components/composecomment"
import Footer from "../components/footer"
import "./comments.css"
class Comments extends Component {
     
    constructor(props) {
        super(props);
        this.state = { allComments: [] };
        this.getAllComments = this.getAllComments.bind(this);
    }
    

    getAllComments() {
        fetch("http://localhost:9000/comments")
            .then(res => res.json())
            .then((data) => this.setState( {allComments: data} ));
        return;
    }

    componentDidMount() {
        this.getAllComments();
    }

    render() {
        return (
            <div className="comments">
                <Navbar page="comments"/>

                <ComposeComment getAllComments={this.getAllComments}/>

                <div>
                    {/* Render comments and their children */}
                    {this.state.allComments.reverse().map((comment, index) => (
                        <div key={index}>
                            <Comment key={index} id={this.state.allComments.length - index} title={comment.title} ip={comment.ip_address} date={comment.date} body={comment.body}/>
                            {/* Render child comments if available */}
                            {comment.children && comment.children.map((child, childIndex) => (
                                <ChildComment key={childIndex} date={child.date} ip={child.ip_address} body={child.body} />
                            ))}
                        </div>
                ))}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Comments;
