import { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import './App.css';
import DemoOutput from "./components/Demo/DemoOutput";

const App =() => {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hello World</h1>
      <DemoOutput show={false}/>
      <Button onClick={toggleParagraphHandler}>show paragraph</Button>
    </div>
  );
}

export default App;
