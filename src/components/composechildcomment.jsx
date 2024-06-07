import React, {Component} from "react";
import "./comment.css";

class ComposeChildComment extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            opened: false
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(`http://localhost:9000/comments/${this.props.parent}/children`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create parent comment');
            }
            this.state.opened.setState(false);
            return response.json();

        })
        
        .catch(error => {
            console.error('Error creating parent comment:', error.message);
        });
    };

    render(){
        return (
            <div className="collapse">
                <input type="checkbox" name="collapse"/>
                    <div className="Comment-reply-button collapse-title text-xl font-medium">
                        <p className="Comment-reply-text">Reply</p>
                    </div>
                    <div className="collapse-content">
                        <form onSubmit={this.handleSubmit}>
                            <textarea name="body" value={this.state.body} onChange={this.handleChange} className="textarea textarea-bordered w-full" placeholder="compose comment"></textarea>
                            <div className="Comment-submit-button">
                                <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
            </div>
        );
    }
}


export default ComposeChildComment;
