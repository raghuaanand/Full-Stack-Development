import { useEffect, useState } from 'react'


function App() {
  const [ socket, setSocket ] = useState< null | WebSocket> (null);
  const [ message, setMessage ] = useState<string[]>([]);
  const [ dispalyMessage, setDisplayMessage ] = useState<string>("");

  useEffect( () => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('WebSocket connection established');
      setSocket(socket);
    }
    socket.onmessage = (messageData) => {
      console.log('Message received from server', messageData.data);
      setMessage((prevMessages) => [...prevMessages, messageData.data]);
    }

    return () => {
      console.log('WebSocket connection closed');
      socket.close();
      setSocket(null);
      setMessage([]);
      setDisplayMessage("");
    }
  }, [])


  if(!socket){
    return <div>Connecting to WebSocket...</div>
  }

  return (
    <>
      <input onChange={(e) => {
        setDisplayMessage(e.target.value);
      }}></input>
      <button onClick={() => {
        socket.send(dispalyMessage);
      }}>Send</button>
      {message.map((msg, index) =>  {
        return <div key={index}>{msg}</div>
      })}
       <div>Last message: {dispalyMessage}</div>
    </>
  )
}

export default App
