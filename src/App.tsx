import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [text, setText] = useState("");
  const [selectedList, setSelectedList] = useState([
    {
      text: "Some Assignment A",
      isDeleted: false,
      isCompleted: false,
      isSelected: false,
    },
  ]);
  return (
    <>
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
