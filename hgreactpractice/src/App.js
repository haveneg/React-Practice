import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Board from './board';
import { useState } from 'react';
import Paragraph from './Paragraph';

function App() {
  const [showBoard, setShowBoard] = useState(false);
  function message() {
    setShowBoard(true);
  }
  let toRender = <Button
  value='banana'
  onButtonClick={message}
  />
  if (showBoard == true) {
    toRender = <Board
    value='board'
    />

    
  }
  return (
    <div className="App">
      {toRender}
    </div>
  );
}

export default App;
