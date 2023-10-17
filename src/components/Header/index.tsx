import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import type { ChangeEventHandler } from "react";

export function Header(props: any) {
  const { text, setText, selectedList, setSelectedList } = props;

  const onClick: ChangeEventHandler<any> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if(!text){
      return;
    }
    const newRecord = {
      text,
      isDeleted: false,
      isCompleted: false,
      isSelected: false,
    };
    const prevList = [...(selectedList ?? [])];
    setSelectedList([newRecord, ...prevList]);
  };
  const value = text;
  const onChange: ChangeEventHandler<any> = (e) => {
    // console.log('Header: onChange, ', e);
    setText(e.target?.value);
  };
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          value={value}
          onChange={onChange}
          placeholder="Add a new assignment"
          type="text"
        />
        <button onClick={onClick}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
