import { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import './App.css';
import DemoOutput from "./components/Demo/DemoOutput";

const App =() => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
    console.log(allowToggle);
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hello World</h1>
      <DemoOutput show={false}/>
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      <Button onClick={toggleParagraphHandler}>show paragraph</Button>
    </div>
  );
}

export default App;
