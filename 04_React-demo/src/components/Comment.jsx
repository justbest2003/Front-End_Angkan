export default Comment = (props) =>{
    return(
        <div className="dialogbox">
            <div className="body">
                <span className="tip tip-up">
                    <div className="message">
                        <span>
                            <b>{props.userId}</b> - {props.message}
                        </span>
                    </div>
                </span>
            </div>
        </div>
    );
}