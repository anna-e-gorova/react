import './Message.css';

function Message(props) {
  return (
    <div className="Message">      
        <p>
          {props.str}
        </p>
    </div>
  );
}

export default Message;
