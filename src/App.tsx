import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import "react-day-picker/dist/style.css";
import moment from "moment";
import { getHwDate } from "./utils";

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;

function App() {
  const [text, setText] = useState("");
  const [selectedList, setSelectedList] = useState([
    {
      text: "Some Assignment A",
      isDeleted: false,
      isCompleted: false,
      isSelected: false,
      dueDate: getHwDate(1),
    },
  ]);
  return (
    <>
      <style id="react-datepicker-style">{css}</style>
      <Header
        text={text}
        setText={setText}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <Assignments
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
    </>
  );
}

export default App;

