import React, { useState, useCallback, useEffect } from "react";
import './App.css';

function App() {

  const [author, setAuthor] = useState('');
  const handleChangeAuthor = (event) => {
     setAuthor(event.target.value);
  }

  const [text, setText] = useState('');
  const handleChangeText = (event) => {
     setText(event.target.value);
  }

  const [messageList, setMessageList] = useState([]);
  const handleClick = useCallback(() => {
    const newMessage = { author: author, text: text};
    setMessageList([...messageList, newMessage]);
  }, [messageList, author, text]);


  useEffect(() => {
     setTimeout(() => {
      if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
      
        const robotMess = { author: 'Robot', text: `hello ${author}`};
        setMessageList([...messageList, robotMess]);
      }
     }, 1500);
   },[messageList, author]);

  return (
    <>
      <span>Hello</span>
      <input type="text" value={author} onChange={handleChangeAuthor} />
      <input type="text" value={text} onChange={handleChangeText} />
      <button onClick={handleClick}>Sent</button>   

      {messageList.map((mess) => <div>{mess.author}: {mess.text}</div>)}
    </>
  );

}

export default App;

