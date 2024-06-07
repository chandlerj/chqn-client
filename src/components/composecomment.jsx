import React, { useState } from "react";
import "./comment.css";
const ComposeComment = ({ getAllComments }) => {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");


    const AlertDisplay = () => {
        if (error === "all") {
            return <div className="Comment-error"><b>Error:</b> comment must have a title and body</div>;
        }
        else if (error === "body") {
            return <div className="Comment-error"><b>Error:</b> comment must have a body</div>;
        }
        else if (error === "title") {
            return <div className="Comment-error"><b>Error:</b> comment must have a title</div>;
        }
    }  

    const handleChange = (event) => {
        if (event.target.name === "title"){
            setTitle(event.target.value);
        }
        if (event.target.name === "body") {
            setBody(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title === "" && body === ""){
            setError("all");
            return;
        }
        else if (body === ""){
            setError("body");
            return;
        }
        else if (title === ""){
            setError("title");
            return;
        }
        
        fetch("http://localhost:9000/comments/makeparentcomment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: title, body: body})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create parent comment');
            }
            return response;

        })
        
        .catch(error => {
            console.error('Error creating parent comment:', error.message);
        });
    };


    return (
        <div className="Comments-reply">
            <AlertDisplay/>
            <div className="collapse bg-base-200">
                <input type="checkbox"/>
                <div className="collapse-title text-xl font-medium">Leave a comment</div>
                <div className="collapse-content">
                    <form onSubmit={handleSubmit}>
                        <p className="Comments-description">title:</p>
                        <textarea name="title" value={title} onChange={handleChange} className="textarea textarea-bordered textarea-xs w-full"></textarea>
                        <p className="Comments-description">comment body:</p>
                        <textarea name="body" value={body} onChange={handleChange} className="textarea textarea-bordered w-full"></textarea>
                        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
    }


export default ComposeComment;

