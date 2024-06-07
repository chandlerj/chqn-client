import './childcomment.css'


    function childComment(props) {
        return (
            <div className="Child-comment">
                <p className="Child-comment-date">{props.date} | {props.ip}</p>
                <p className="Child-comment-content">{props.body}</p>
            </div>
        );
    }

export default childComment;
