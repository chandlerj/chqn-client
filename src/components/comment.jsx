import React, {Component} from "react";
import ComposeChildComment from "./composechildcomment";
import "./comment.css";


    function Comment(props) {
        return (
            <div className ="Comment">
                <h2 className="Comment-title">{props.title}</h2>
                <p className="Comment-date">{props.date} | {props.ip}</p>
                <p>{props.body}</p>
                <ComposeChildComment parent={props.id}/>
            </div>
        )
    }
    


export default Comment;
